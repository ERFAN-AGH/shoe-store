import { TBrandLogo } from "@/app/Type/Type";

function BrandLogo({ logoPath, color = "#355E3B", size = 150 }: TBrandLogo) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 192.756 192.756"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path d={logoPath} fill={color} />
      </g>
    </svg>
  );
}

export default BrandLogo;
