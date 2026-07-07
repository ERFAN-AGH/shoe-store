import { TIcon } from "@/app/Type/Type";

function Icon({ path, size }: TIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d={path} />
    </svg>
  );
}

export default Icon;
