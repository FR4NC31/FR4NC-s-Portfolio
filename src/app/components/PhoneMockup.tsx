import Image from "next/image";

export default function PhoneMockup({ image, imageAlt }: { image: string; imageAlt: string }) {
  return (
    <div className="phone-presentation">
      <div className="phone-mockup">
        <span className="phone-hardware" aria-hidden="true" />
        <div className="phone-screen">
          <Image
            src={image}
            alt={imageAlt}
            width={256}
            height={256}
            loading="lazy"
            sizes="(min-width: 1280px) 96px, (min-width: 768px) 72px, 64px"
            className="phone-brand-image"
          />
        </div>
      </div>
    </div>
  );
}
