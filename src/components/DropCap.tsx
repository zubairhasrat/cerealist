interface DropCapProps {
  letter: string;
  size?: string;
}

export default function DropCap({ letter, size = "text-[60px]" }: DropCapProps) {
  return (
    <span className={`font-bold ${size} leading-none float-left mr-2 mt-1`}>
      {letter}
    </span>
  );
}
