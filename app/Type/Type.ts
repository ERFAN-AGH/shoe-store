export interface ProductType {
  id: string;
  image: string;
  title: string;
  isNew: boolean;
  category: string;
  price: number;
}
export interface TopBarLinkType {
  id: string;
  title: string;
  href: string;
  icon: string;
  viewBox: string;
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
  viewBox: string;
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
  subTitle?: string;
  viewBox: string;
}

export interface IconType {
  id?: string;
  paths: string[];
  size?: number;
  viewBox: string;
  className?: string;
}

export interface catrgoryType {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  colStart: string;
  rowStart: string;
  rowSpan: string;
}

export interface promoSection {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  category: string;
  buttonTitle: string;
}

export interface PopularCategoryesType {
  id: string;
  paths: string[];
  viewBox: string;
  title: string;
}
