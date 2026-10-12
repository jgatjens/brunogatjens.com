import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function InfoContent() {
  return (
    <div className="w-full max-w-[964px]">
      <div className="grid grid-cols-1 gap-8 text-base leading-[1.3125] lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center lg:gap-12">
        <div className="min-w-0 space-y-6">
          <p>With 14+ years as a UX/UI Designer, I craft intuitive digital experiences for complex enterprise systems, B2B and B2C platforms, and transportation solutions — turning business needs into scalable, user-centered products with real impact.</p>
          <p>Specialized in creating charming, expressive characters and illustrations for children’s books. With a strong command of shape language, clean linework, vibrant colors, and emotional appeal, I bring stories to life through memorable and engaging visuals that connect with young readers.</p>
        </div>
        <Image
          src="/images/avatar-me-info.png"
          alt="Illustrated portrait of Bruno Gätjens"
          width={632}
          height={632}
          sizes="240px"
          className="mx-auto size-60 rounded-full lg:mx-0 lg:justify-self-end"
        />
      </div>
      <SocialLinks />
    </div>
  );
}
