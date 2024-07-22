import { ReactNode } from "react";

export default function SanityLayout({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}
