interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fluid responsive content container.
 * Max-width 1383px (Figma desktop reference), centered with auto margins.
 * 16px side padding on mobile, 30px on md+.
 */
export default function ContentContainer({
  children,
  className = "",
}: ContentContainerProps) {
  return (
    <div
      className={`w-full max-w-[1383px] mx-auto px-4 md:px-[30px] ${className}`}
    >
      {children}
    </div>
  );
}
