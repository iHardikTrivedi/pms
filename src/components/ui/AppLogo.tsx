import { HeartPulse } from "lucide-react";

type AppLogoProps = {
  compact?: boolean;
};

export function AppLogo({ compact = false }: AppLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white">
        <HeartPulse size={22} />
      </div>

      {!compact && (
        <span className="text-lg font-semibold text-white">PMS</span>
      )}
    </div>
  );
}
