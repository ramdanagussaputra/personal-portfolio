import { cn } from "@/lib/tools";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function SectionHeader({ children, className = "" }: Props) {
  return (
    <>
      <h2 className={cn("bg-gray-100 p-8 rounded-xl text-6xl mb-16", className)}>
        {children}
      </h2>
    </>
  );
}

export default SectionHeader;
