import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function InfoContent() {
  return (
    <div className="info-content">
      <Image
        src="/images/avatar-me-info.png"
        alt="Illustrated portrait of Bruno Gätjens"
        width={632}
        height={632}
        sizes="(min-width: 1024px) 320px, (min-width: 375px) 320px, calc(100vw - 32px)"
        className="info-portrait"
      />
      <div className="info-biography">
        <p>With 15+ years as a Senior UI/UX Designer, I craft intuitive digital experiences for complex enterprise systems, B2B and B2C platforms, and transportation solutions — turning business needs into scalable, user-centered products with real impact.</p>
        <p>Specialized in creating charming, expressive characters and illustrations for children’s books. With a strong command of shape language, clean linework, vibrant colors, and emotional appeal, I bring stories to life through memorable and engaging visuals that connect with young readers.</p>
      </div>
      <SocialLinks />
    </div>
  );
}
