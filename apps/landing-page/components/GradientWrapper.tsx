import React from "react";
import { PropsWithChildren } from "react";

export const GradientWrapper = ({
  children,
  wrapperClassName,
  ...props
}: PropsWithChildren<{ wrapperClassName?: string; className?: string }>) => (
  <div {...props} className={`relative ${props.className || ""}`}>
    <div
      className={`absolute m-auto blur-[160px] ${wrapperClassName || ""}`}
      style={{
        background:
          "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);
