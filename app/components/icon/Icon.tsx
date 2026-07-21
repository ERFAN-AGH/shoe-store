import { IconType } from "@/app/Type/Type";

function Icon({
  paths,
  viewBox,

  size = 150,
  className,
}: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      style={{ cursor: "pointer " }}
      className={className}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        {paths.map((d, index) => (
          <path key={index} d={d} fill="currentColor" />
        ))}
      </g>
    </svg>
  );
}

export default Icon;
