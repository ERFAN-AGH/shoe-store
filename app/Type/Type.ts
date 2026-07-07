export interface ProductType {
  id: string;
  title: string;
  views: number;
  image: string;
  category: string;
  href: string;
  isNew: boolean;
  isTrendS: boolean;
  isBestSelling: boolean;
  isDiscounted: boolean;
  isSingleSize: boolean;
  brands: string;
  name: string;
  logo: string;
}
export interface TopBarLinkType {
  id: string;
  title: string;
  href: string;
  icon: string;
}

export interface TopBarInfoItemType {
  id: string;
  title: string;
  icon: string;
}
export interface TIcon {
  path: string;
  className?: string;
  size: number;
}
