import { FolderOpen } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
        <FolderOpen size={22} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-900">{title}</h3>

      <p className="mt-1 max-w-sm text-sm text-gray-500">{description}</p>
    </div>
  );
}
