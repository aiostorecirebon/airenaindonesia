import React from "react";
interface MapCardProps {
  branchName: string;
  shareLink: string; // https://maps.app.goo.gl/...
  square?: boolean;
  zoom?: number;
}
const MapCard: React.FC<MapCardProps> = ({
  branchName,
  shareLink,
  square = false,
  zoom = 15,
}) => {
  // Convert the share link into an embeddable URL pattern
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    shareLink
  )}&z=${zoom}&output=embed`;
  return (
    <section
      className="w-full max-w-3xl mx-auto border-2 border-brand-primary rounded-xl overflow-hidden shadow-lg bg-white"
      aria-labelledby={`map-title-${branchName
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div className="px-4 py-3">
        <h3
          id={`map-title-${branchName.replace(/\s+/g, "-").toLowerCase()}`}
          className="m-0 text-lg font-semibold text-brand-primary"
        >
          {branchName}
        </h3>
      </div>

      <div
        className={
          square ? "w-full aspect-square" : "w-full h-[280px] md:h-[320px]"
        }
      >
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map ${branchName}`}
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-3 bg-muted">
        <a
          href={shareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brand px-4 py-2 rounded-lg"
          aria-label={`Buka ${branchName} di Google Maps`}
        >
          Buka di Google Maps
        </a>
        <small className="text-muted-foreground">
          Zoom: {zoom} · Marker: {branchName}
        </small>
      </div>
    </section>
  );
};
export default MapCard;
