export interface ProductType {
  id: string;
  image: string;
  href: string;
  title: string;
  category: string;
}
export interface TopBarLinkType {
  id: string;
  title: string;
  href: string;
  icon: string;
}

export interface TIcon {
  path: string;
  className?: string;
  size: number;
}

export interface TActionBarIcons {
  path: string;
  id: string;
  href: string;
}
export interface navBarlinkList {
  title: string;
  href: string;
  id: string;
}

export interface homeBanner {
  id: string;
  image: string;
  collectionTitle: string;
  bannerTitle: string;
  subTitleOne: string;
  subTitleTow: string;
  buttonCollection: string;
  buttonCard: string;
}

export interface topBarInfoItemsType {
  id: string;
  title: string;
  icon: string;
}

export interface TBrandLogo {
  id?: string;
  paths: string[];
  size?: number;
  color?: string;
  viewBox: string;
}
