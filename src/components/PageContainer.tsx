import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <main className={cn("mx-auto max-w-3xl px-5 py-14", className)}>{children}</main>;
}
