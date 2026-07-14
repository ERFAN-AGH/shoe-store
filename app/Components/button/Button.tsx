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
    return "bg-[#2E7D32] rounded py-1 px-2 flex justify-center cursor-pointer text-white hover:bg-[#1B5E20] text-sm";
  }
  if (variant === "warning") {
    return "bg-yellow-400 rounded py-1 px-2 flex justify-center cursor-pointer text-white hover:bg-yellow-500";
  }
}
