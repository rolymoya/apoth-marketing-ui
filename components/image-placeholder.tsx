import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  compact?: boolean;
  dark?: boolean;
};

export function ImagePlaceholder({
  label,
  className,
  compact = false,
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={cn(
        "image-placeholder relative flex min-h-36 items-center justify-center overflow-hidden rounded-[inherit] border border-dashed",
        dark ? "border-white/40 text-white" : "border-black/20 text-foreground/70",
        className,
      )}
    >
      <div className={cn("relative z-10 flex max-w-64 flex-col items-center text-center", compact ? "gap-1.5 p-3" : "gap-3 p-6")}>
        <span className={cn("grid place-items-center rounded-full border", dark ? "border-white/35 bg-white/10" : "border-black/15 bg-white/55", compact ? "h-8 w-8" : "h-11 w-11")}>
          <ImageIcon className={compact ? "h-3.5 w-3.5" : "h-5 w-5"} strokeWidth={1.7} />
        </span>
        <span className={cn("font-medium leading-snug", compact ? "text-[10px]" : "text-xs")}>Image needed</span>
        <span className={cn("leading-snug opacity-75", compact ? "text-[9px]" : "text-[11px]")}>{label}</span>
      </div>
    </div>
  );
}
