import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  innerClassName?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Tag = "section",
  innerClassName,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={clsx("px-6 lg:px-8 py-20 lg:py-28", className)}>
      <div className={clsx("max-w-7xl mx-auto", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
