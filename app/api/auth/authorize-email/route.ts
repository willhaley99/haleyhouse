import { NextResponse } from "next/server";
import { isAuthorizedEmail } from "@/lib/authorization";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof body.email !== "string" ||
    body.email.length > 254
  ) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (!isAuthorizedEmail(body.email)) {
    return NextResponse.json({ authorized: false }, { status: 403 });
  }

  return NextResponse.json({ authorized: true });
}
