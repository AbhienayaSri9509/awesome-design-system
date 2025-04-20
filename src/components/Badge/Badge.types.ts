// src/components/Badge/Badge.types.ts

export type BadgeVariant = "primary" | "secondary" | "success" | "error";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}
