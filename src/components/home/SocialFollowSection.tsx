import Link from "next/link";

const SOCIAL_PLATFORMS = ["Facebook", "Instagram", "TikTok", "X"];

export default function SocialFollowSection() {
  return (
    <section className="pt-6 pb-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        {SOCIAL_PLATFORMS.map((platform) => (
          <div
            key={platform}
            className="w-12 h-12 rounded-full bg-ink flex items-center justify-center"
            title={platform}
          >
            <span className="text-paper text-[11px] font-semibold">
              {platform[0]}
            </span>
          </div>
        ))}
      </div>
      <p className="font-[family-name:var(--font-crimson)] text-[20px] text-ink text-center">
        Follow, Post, &amp; Tag{" "}
        <Link href="#" className="font-semibold hover:underline">
          @theCerealist
        </Link>
      </p>
    </section>
  );
}
