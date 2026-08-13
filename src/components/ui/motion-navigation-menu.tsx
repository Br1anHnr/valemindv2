"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Highlight,
  HighlightItem,
} from "@/components/unlumen-ui/primitives/effects/highlight";

type Spring = {
  type: "spring";
  stiffness?: number;
  damping?: number;
  bounce: number;
};

type ContentRecord = {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
  innerClassName?: string;
};

type MotionNavigationMenuContextValue = {
  activeValue: string;
  direction: number;
  spring: Spring;
  viewport: boolean;
  openValue: (value: string) => void;
  closeMenu: () => void;
  registerContent: (value: string, content: ContentRecord) => () => void;
};

type MotionNavigationMenuItemContextValue = {
  value?: string;
};

const MotionNavigationMenuContext =
  React.createContext<MotionNavigationMenuContextValue | null>(null);

const MotionNavigationMenuItemContext =
  React.createContext<MotionNavigationMenuItemContextValue | null>(null);

const contentVariants = {
  initial: (direction: number) => ({
    x: `${25 * direction}%`,
    opacity: 0,
    filter: "blur(4px)",
  }),
  active: {
    x: "0%",
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: `${-25 * direction}%`,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

export type MotionNavigationMenuProps = Omit<
  React.ComponentPropsWithRef<"nav">,
  "onValueChange"
> & {
  viewport?: boolean;
  viewportClassName?: string;
  springBounce?: number;
  springStiffness?: number;
  springDamping?: number;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function MotionNavigationMenu({
  className,
  children,
  viewport = true,
  viewportClassName,
  springBounce = 0,
  springStiffness = 380,
  springDamping = 30,
  value,
  onValueChange,
  onPointerLeave,
  onKeyDown,
  ...props
}: MotionNavigationMenuProps) {
  const rootRef = React.useRef<HTMLElement | null>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const lastActiveValueRef = React.useRef(value ?? "");
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState("");
  const [direction, setDirection] = React.useState(1);
  const [contentByValue, setContentByValue] = React.useState<
    Record<string, ContentRecord>
  >({});

  const activeValue = value ?? internalValue;

  const spring = React.useMemo(
    () => ({
      type: "spring" as const,
      bounce: springBounce,
      stiffness: springStiffness,
      damping: springDamping,
    }),
    [springBounce, springStiffness, springDamping],
  );

  const getItemValues = React.useCallback(() => {
    const root = rootRef.current;
    if (!root) return [];
    return Array.from(
      root.querySelectorAll<HTMLElement>(
        '[data-slot="navigation-menu-item"][data-value]',
      ),
      (item) => item.dataset.value ?? "",
    ).filter(Boolean);
  }, []);

  const setActiveValue = React.useCallback(
    (nextValue: string) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange],
  );

  const openValue = React.useCallback(
    (nextValue: string) => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      if (!nextValue) return;

      const itemValues = getItemValues();
      const previousIndex = itemValues.indexOf(lastActiveValueRef.current);
      const nextIndex = itemValues.indexOf(nextValue);

      if (previousIndex !== -1 && nextIndex !== -1 && previousIndex !== nextIndex) {
        setDirection(nextIndex > previousIndex ? 1 : -1);
      }

      lastActiveValueRef.current = nextValue;
      setActiveValue(nextValue);
    },
    [getItemValues, setActiveValue],
  );

  const closeMenu = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      lastActiveValueRef.current = "";
      setActiveValue("");
    }, 180);
  }, [setActiveValue]);

  const registerContent = React.useCallback(
    (val: string, content: ContentRecord) => {
      setContentByValue((prev) => ({ ...prev, [val]: content }));
      return () => {
        setContentByValue((prev) => {
          const next = { ...prev };
          delete next[val];
          return next;
        });
      };
    },
    [],
  );

  React.useEffect(() => {
    if (value !== undefined) {
      if (value) openValue(value);
      else closeMenu();
    }
  }, [value, openValue, closeMenu]);

  React.useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        rootRef.current &&
        event.target instanceof Node &&
        !rootRef.current.contains(event.target)
      ) {
        lastActiveValueRef.current = "";
        setActiveValue("");
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [setActiveValue]);

  const contextValue = React.useMemo(
    () => ({
      activeValue,
      direction,
      spring,
      viewport,
      openValue,
      closeMenu,
      registerContent,
    }),
    [
      activeValue,
      closeMenu,
      direction,
      openValue,
      registerContent,
      spring,
      viewport,
    ],
  );

  return (
    <MotionNavigationMenuContext.Provider value={contextValue}>
      <nav
        ref={rootRef}
        data-slot="navigation-menu"
        data-viewport={viewport}
        className={cn(
          "group/navigation-menu flex items-center justify-center",
          className,
        )}
        onPointerLeave={() => closeMenu()}
        onPointerEnter={() => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            lastActiveValueRef.current = "";
            setActiveValue("");
          }
        }}
        {...props}
      >
        {children}
        {viewport && (
          <MotionNavigationMenuViewport
            className={viewportClassName}
            contentByValue={contentByValue}
          />
        )}
      </nav>
    </MotionNavigationMenuContext.Provider>
  );
}

export function MotionNavigationMenuList({
  className,
  highlightClassName = "bg-[#1D2025]/90 rounded-lg",
  ...props
}: React.ComponentPropsWithRef<"ul"> & {
  highlightClassName?: string;
}) {
  return (
    <Highlight
      mode="parent"
      controlledItems
      hover
      highlightClassName={highlightClassName}
      containerClassName="relative"
    >
      <ul
        data-slot="navigation-menu-list"
        className={cn(
          "group relative z-10 flex flex-1 list-none items-center justify-center gap-1",
          className,
        )}
        {...props}
      />
    </Highlight>
  );
}

export function MotionNavigationMenuItem({
  className,
  value,
  ...props
}: React.ComponentPropsWithRef<"li"> & {
  value?: string;
}) {
  const itemContextValue = React.useMemo(() => ({ value }), [value]);

  return (
    <MotionNavigationMenuItemContext.Provider value={itemContextValue}>
      <li
        data-slot="navigation-menu-item"
        data-value={value}
        className={cn("relative", className)}
        {...props}
      />
    </MotionNavigationMenuItemContext.Provider>
  );
}

export const motionNavigationMenuTriggerStyle = cva(
  "group inline-flex h-8 w-max items-center justify-center rounded-lg bg-transparent px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] focus:text-[#F5F5F5] data-[state=open]:text-[#F5F5F5] outline-none transition-colors cursor-pointer select-none",
);

export function MotionNavigationMenuTrigger({
  className,
  children,
  onPointerEnter,
  onFocus,
  onClick,
  ...props
}: React.ComponentPropsWithRef<"button">) {
  const context = React.useContext(MotionNavigationMenuContext);
  const itemContext = React.useContext(MotionNavigationMenuItemContext);
  const value = itemContext?.value;
  const isOpen = !!value && context?.activeValue === value;

  return (
    <HighlightItem asChild value={value}>
      <button
        type="button"
        data-slot="navigation-menu-trigger"
        data-state={isOpen ? "open" : "closed"}
        aria-expanded={isOpen}
        className={cn(motionNavigationMenuTriggerStyle(), className)}
        onPointerEnter={(e) => {
          onPointerEnter?.(e);
          if (value) context?.openValue(value);
        }}
        onFocus={(e) => {
          onFocus?.(e);
          if (value) context?.openValue(value);
        }}
        onClick={(e) => {
          onClick?.(e);
          if (value) {
            if (isOpen) context?.closeMenu();
            else context?.openValue(value);
          }
        }}
        {...props}
      >
        {children}
        <motion.span
          aria-hidden="true"
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 24,
          }}
          className="relative top-[0.5px] ml-1 inline-flex"
        >
          <ChevronDownIcon className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
        </motion.span>
      </button>
    </HighlightItem>
  );
}

export function MotionNavigationMenuContent({
  className,
  highlightClassName,
  innerClassName,
  children,
}: React.ComponentPropsWithRef<"div"> & {
  highlightClassName?: string;
  innerClassName?: string;
}) {
  const context = React.useContext(MotionNavigationMenuContext);
  const itemContext = React.useContext(MotionNavigationMenuItemContext);
  const value = itemContext?.value;

  React.useEffect(() => {
    if (!context || !value) return;
    return context.registerContent(value, {
      children,
      className,
      highlightClassName,
      innerClassName,
    });
  }, [children, className, context, highlightClassName, innerClassName, value]);

  return null;
}

export function MotionNavigationMenuViewport({
  className,
  contentByValue,
}: React.ComponentPropsWithRef<"div"> & {
  contentByValue?: Record<string, ContentRecord>;
}) {
  const context = React.useContext(MotionNavigationMenuContext);
  const activeValue = context?.activeValue;
  const activeContent = activeValue && contentByValue ? contentByValue[activeValue] : null;

  return (
    <AnimatePresence>
      {activeContent && (
        <motion.div
          key="viewport-container"
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 450, damping: 32 }}
          /* Anchor point: exactly dead-center below the navbar */
          className="absolute top-full left-1/2 -translate-x-1/2 isolate z-50 flex justify-center pt-2.5 pointer-events-auto"
          onPointerEnter={() => {
            if (activeValue) context?.openValue(activeValue);
          }}
        >
          {/* Invisible hover bridge connecting trigger bar to dropdown */}
          <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent" />

          <motion.div
            layout
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
            className={cn(
              "bg-[#111316] text-[#F5F5F5] overflow-hidden rounded-2xl border border-[#1D2025] shadow-2xl backdrop-blur-2xl p-2",
              className,
            )}
          >
            <AnimatePresence mode="wait" custom={context?.direction ?? 1}>
              <motion.div
                key={activeValue}
                custom={context?.direction ?? 1}
                variants={contentVariants}
                initial="initial"
                animate="active"
                exit="exit"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={cn("w-max", activeContent.className)}
              >
                {activeContent.children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MotionNavigationMenuLink({
  className,
  ...props
}: React.ComponentPropsWithRef<"a">) {
  return (
    <HighlightItem asChild>
      <a
        data-slot="navigation-menu-link"
        className={cn(
          "text-[#A1A1AA] hover:text-[#F5F5F5] flex flex-col gap-1 rounded-lg p-2 text-xs transition-colors outline-none cursor-pointer select-none",
          className,
        )}
        {...props}
      />
    </HighlightItem>
  );
}

export default MotionNavigationMenu;
