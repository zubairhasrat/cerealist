import Image from "next/image";

const socialLinks = [
  { platform: "Facebook", icon: "/images/facebook-icon.png" },
  { platform: "Instagram", icon: "/images/instagram-icon.png" },
  { platform: "TikTok", icon: "/images/tictok-icon.png" },
  { platform: "X", icon: "/images/x-icon.png" },
];

export default function SocialFollowSection() {
  return (
    <section className="py-12 flex flex-col items-center gap-6">
      <div className="flex items-center gap-[9.5px]">
        {socialLinks.map(({ platform, icon }) => (
          <a
            key={platform}
            href="#"
            aria-label={`Follow us on ${platform}`}
            className="block transition-transform drop-shadow-[0px_5px_0px_rgba(0,0,0,0.85)] active:translate-y-1 active:drop-shadow-[0px_2px_0px_rgba(0,0,0,0.85)]"
          >
            <Image
              src={icon}
              alt={platform}
              width={110}
              height={99}
            />
          </a>
        ))}
      </div>
      <p className="font-[family-name:var(--font-crimson)] text-[20px] md:text-[32px] text-center leading-[1.15]">
        Follow, Post, &amp; Tag
        <br />
        @TheCerealist
      </p>
    </section>
  );
}
