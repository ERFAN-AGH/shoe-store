import React, { ComponentProps } from "react";

type TVariant = "success" | "warning";
type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, className, ...rest }: TButton) {
  return (
    <button
      {...rest}
      className={`${getButtonStyles(variant)} ${className || ""}`}
    >
      {children}
    </button>
  );
}

export default Button;

function getButtonStyles(variant: TVariant) {
  if (variant === "success") {
    return "bg-emerald-300 rounded py-1 px-2 flex justify-center cursor-pointer text-white hover:bg-emerald-500";
  }
  if (variant === "warning") {
    return "bg-yellow-400 rounded py-1 px-2 flex justify-center cursor-pointer text-white hover:bg-yellow-500";
  }
}
