import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        "px-2 w-36 h-7 bg-zinc-50 border rounded-md outline-none text-sm focus-visible:border-emerald-500 focus-visible:ring-2 ring-zinc-500/10",
        props.className
      )}
    />
  );
});

Input.displayName = "Input";
