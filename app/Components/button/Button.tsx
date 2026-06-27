import React, { ComponentProps } from "react";
type TVariant = "success" | "warning";
type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};
function Button({ children, variant, ...rest }: TButton) {
  return (
    <button {...rest} className={getButtonStyles(variant)}>
      {children}
      <div className=""></div>
    </button>
  );
}

export default Button;

function getButtonStyles(variant: TVariant) {
  if (variant === "success") {
    return "bg-emerald-300 rounded  py-1 px-2 flex justify-center cursor-pointer text-white hover:text-white hover:bg-emerald-500";
  }
}
