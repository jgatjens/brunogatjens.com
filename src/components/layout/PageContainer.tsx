import type { ReactNode } from "react";

type PageContainerProps = { children: ReactNode; className?: string };

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`mx-auto w-full max-w-page px-page-gutter ${className}`}>{children}</div>;
}
