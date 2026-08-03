import type { ReactNode } from "react";

/**
 * Shared base props for layout and section components.
 */
export type WithChildren = {
  children: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type BaseComponentProps = WithChildren & WithClassName;
