import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-panel border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300",
        hoverEffect && "hover:border-neon-lime/50 hover:shadow-[0_0_30px_-10px_rgba(183,255,90,0.2)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
