type PhotoCreditProps = {
  creator: string;
  sourceUrl: string;
  title: string;
  className?: string;
};

export default function PhotoCredit({
  creator,
  sourceUrl,
  title,
  className,
}: PhotoCreditProps) {
  return (
    <figcaption className={className}>
      Photo by {creator},{" "}
      <a href={sourceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">
        “{title}”
      </a>
      {" · "}
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        CC BY-SA 4.0
      </a>
    </figcaption>
  );
}
