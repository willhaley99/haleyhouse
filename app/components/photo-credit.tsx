type PhotoCreditProps = {
  creator: string;
  sourceUrl: string;
  title: string;
  licenseName?: string;
  licenseUrl?: string;
  className?: string;
};

export default function PhotoCredit({
  creator,
  sourceUrl,
  title,
  licenseName = "CC BY-SA 4.0",
  licenseUrl = "https://creativecommons.org/licenses/by-sa/4.0/",
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
        href={licenseUrl}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        {licenseName}
      </a>
    </figcaption>
  );
}
