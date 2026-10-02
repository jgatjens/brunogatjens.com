import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function InfoContent() {
  return (
    <div className="contents">
      <Image
        src="/images/avatar-me-info.png"
        alt="Illustrated portrait of Bruno Gätjens"
        width={632}
        height={632}
        sizes="(min-width: 1024px) 320px, (min-width: 375px) 320px, calc(100vw - 32px)"
        className="mx-auto h-auto w-full max-w-79 rounded-full lg:col-start-2 lg:row-span-2 lg:row-start-1"
      />
      <div className="min-w-0 space-y-6 text-base leading-relaxed lg:col-start-1 lg:row-start-2 lg:leading-[1.3125]">
        <p>With 15+ years as a Senior UI/UX Designer, I craft intuitive digital experiences for complex enterprise systems, B2B and B2C platforms, and transportation solutions — turning business needs into scalable, user-centered products with real impact.</p>
        <p>Specialized in creating charming, expressive characters and illustrations for children’s books. With a strong command of shape language, clean linework, vibrant colors, and emotional appeal, I bring stories to life through memorable and engaging visuals that connect with young readers.</p>
      </div>
      <SocialLinks />
    </div>
  );
}
