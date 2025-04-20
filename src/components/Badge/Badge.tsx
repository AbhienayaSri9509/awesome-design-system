import React from 'react';
import clsx from 'clsx';
import { BadgeProps } from './Badge.types';

const variantClasses = {
  primary: "bg-primary text-white dark:bg-indigo-400 dark:text-black",
  secondary: "bg-secondary text-white dark:bg-slate-400 dark:text-black",
  success: "bg-green-500 text-white dark:bg-green-400 dark:text-black",
  error: "bg-red-500 text-white dark:bg-red-400 dark:text-black",
};

const Badge: React.FC<BadgeProps> = ({ label, variant = "primary", className }) => {
  return (
    <span
      className={clsx(
        "inline-block px-3 py-1 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
      role="status"
      aria-label={label}
    >
      {label}
    </span>
  );
};

export default Badge;
