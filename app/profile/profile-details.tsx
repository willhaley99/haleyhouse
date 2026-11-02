"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";

async function fetchCurrentSession(signal?: AbortSignal): Promise<Session | null> {
  const response = await fetch("/api/auth/session", { signal });
  if (!response.ok) {
    throw new Error(`Session request failed with status ${response.status}`);
  }

  return response.json();
}

export default function ProfileDetails() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    void fetchCurrentSession(controller.signal)
      .then((currentSession) => {
        if (!active) {
          return;
        }

        if (!currentSession?.user) {
          void signOut({ callbackUrl: "/signin" });
          return;
        }

        setSession(currentSession);
      })
      .catch((error: unknown) => {
        if (!active || (error instanceof DOMException && error.name === "AbortError")) {
          return;
        }

        console.error("Unable to load the signed-in member profile.", error);
        setHasError(true);
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  async function retryLoadingSession() {
    setIsLoading(true);
    setHasError(false);

    try {
      const currentSession = await fetchCurrentSession();
      if (!currentSession?.user) {
        await signOut({ callbackUrl: "/signin" });
        return;
      }

      setSession(currentSession);
    } catch (error) {
      console.error("Unable to load the signed-in member profile.", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <section
        aria-label="Google account profile"
        aria-live="polite"
        className="mt-8 border border-stone-200 bg-[#fcfdfd] p-7 sm:p-9"
      >
        <p className="text-stone-600">Loading your account details…</p>
      </section>
    );
  }

  if (hasError || !session?.user) {
    return (
      <section
        aria-label="Google account profile"
        className="mt-8 border border-stone-200 bg-[#fcfdfd] p-7 sm:p-9"
      >
        <p role="alert" className="text-stone-700">
          We couldn’t load your account details.
        </p>
        <button
          type="button"
          onClick={() => void retryLoadingSession()}
          className="mt-4 rounded-sm bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-900"
        >
          Try again
        </button>
      </section>
    );
  }

  const name = session.user.name?.trim() || "Member";
  const email = session.user.email;
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <section
      aria-label="Google account profile"
      className="mt-8 border border-stone-200 bg-[#fcfdfd] p-7 sm:p-9"
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt=""
            width={96}
            height={96}
            unoptimized
            className="size-24 rounded-full border border-stone-200 object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex size-24 items-center justify-center rounded-full bg-amber-100 text-2xl font-semibold text-amber-900"
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-stone-500">Signed in with Google</p>
          <h2 className="mt-1 break-words text-2xl font-semibold text-stone-950">{name}</h2>
          <p className="mt-2 break-all text-stone-600">{email ?? "Email unavailable"}</p>
        </div>
      </div>
      <dl className="mt-8 grid gap-5 border-t border-stone-200 pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-stone-500">Name</dt>
          <dd className="mt-1 font-medium text-stone-900">{name}</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Email address</dt>
          <dd className="mt-1 break-all font-medium text-stone-900">
            {email ?? "Email unavailable"}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Account provider</dt>
          <dd className="mt-1 font-medium text-stone-900">Google</dd>
        </div>
        <div>
          <dt className="text-sm text-stone-500">Member access</dt>
          <dd className="mt-1 font-medium text-emerald-800">Approved</dd>
        </div>
      </dl>
    </section>
  );
}
