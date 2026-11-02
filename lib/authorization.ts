export function isAuthorizedEmail(email: string | null | undefined): boolean {
  if (!email) {
    return false;
  }

  const authorizedEmails = new Set(
    (process.env.AUTHORIZED_EMAILS ?? "")
      .split(",")
      .map((authorizedEmail) => authorizedEmail.trim().toLowerCase())
      .filter(Boolean),
  );

  return authorizedEmails.has(email.trim().toLowerCase());
}
