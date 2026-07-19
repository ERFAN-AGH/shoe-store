import { TBrandLogo } from "@/app/Type/Type";

function BrandCard({
  paths,
  viewBox,
  color = "#355E3B",
  size = 150,
}: TBrandLogo) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      style={{ cursor: "pointer " }}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        {paths.map((d, index) => (
          <path key={index} d={d} fill={color} />
        ))}
      </g>
    </svg>
  );
}

export default BrandCard;
