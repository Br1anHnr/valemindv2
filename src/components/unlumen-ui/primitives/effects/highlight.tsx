"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightContextValue {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  highlightClassName?: string;
}

const HighlightContext = React.createContext<HighlightContextValue>({
  hoveredId: null,
  setHoveredId: () => {},
});

export interface HighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "parent" | "standalone";
  controlledItems?: boolean;
  hover?: boolean;
  containerClassName?: string;
  highlightClassName?: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  className,
  containerClassName,
  highlightClassName = "bg-[#1D2025] rounded-lg",
  ...props
}) => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  return (
    <HighlightContext.Provider
      value={{
        hoveredId,
        setHoveredId,
        highlightClassName,
      }}
    >
      <div className={cn("relative", containerClassName)} {...props}>
        {children}
      </div>
    </HighlightContext.Provider>
  );
};

export interface HighlightItemProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  value?: string;
  children: React.ReactNode;
}

export const HighlightItem: React.FC<HighlightItemProps> = ({
  asChild = false,
  value,
  children,
  className,
  ...props
}) => {
  const context = React.useContext(HighlightContext);
  const internalId = React.useId();
  const id = value || internalId;
  const isHovered = context.hoveredId === id;

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return (
      <div className="relative inline-flex items-center">
        {isHovered && (
          <motion.div
            layoutId="highlight-pill"
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className={cn(
              "absolute inset-0 bg-[#1D2025]/80 rounded-lg pointer-events-none z-0",
              context.highlightClassName
            )}
          />
        )}
        {React.cloneElement(child, {
          onMouseEnter: (e: React.MouseEvent) => {
            child.props.onMouseEnter?.(e);
            context.setHoveredId(id);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            child.props.onMouseLeave?.(e);
            context.setHoveredId(null);
          },
          className: cn("relative z-10", child.props.className, className),
          ...props,
        })}
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => context.setHoveredId(id)}
      onMouseLeave={() => context.setHoveredId(null)}
      className={cn("relative inline-flex items-center", className)}
      {...props}
    >
      {isHovered && (
        <motion.div
          layoutId="highlight-pill"
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className={cn(
            "absolute inset-0 bg-[#1D2025]/80 rounded-lg pointer-events-none z-0",
            context.highlightClassName
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Highlight;
