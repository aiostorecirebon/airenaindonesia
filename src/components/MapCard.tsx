import React from "react";

interface MapCardProps {
  branchName: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  shareLink: string; // https://maps.app.goo.gl/...
  square?: boolean;
  zoom?: number;
}

const MapCard: React.FC<MapCardProps> = ({
  branchName,
  coordinates,
  shareLink,
  square = false,
  zoom = 15,
}) => {
  // Convert coordinates to embeddable URL pattern
  const embedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sid!4v1234567890!5m2!1sen!2sid`;

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
          Koordinat: {coordinates.lat}, {coordinates.lng}
        </small>
      </div>
    </section>
  );
};

export default MapCard;
