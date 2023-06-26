export type Products = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export type Categories = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";

//HennesProduct
export type HennesProduct = {
  results: Result[];
  pagination: Pagination;
  facets: Facet[];
  freeTextSearch: string;
  categoryCode: string;
  rangeFacets: RangeFacet[];
  baseUrl: string;
};

type Facet = {
  code: string;
  priority: number;
  category: boolean;
  multiSelect: boolean;
  visible: boolean;
  values: Value[];
};

type Value = {
  code: string;
  count: number;
  selected: boolean;
};

type Pagination = {
  pageSize: number;
  currentPage: number;
  sort: string;
  numberOfPages: number;
  totalNumberOfResults: number;
  totalNumberOfResultsUnfiltered: number;
};

type RangeFacet = {
  code: string;
  range: Range;
};

type Range = {
  min: number;
  max: number;
  minSelected: number;
  maxSelected: number;
};

type Result = {
  code: string;
  name: string;
  stock: Stock;
  price: Price;
  images: GalleryImage[];
  categories: any[];
  pk: string;
  whitePrice: Price;
  articles: Article[];
  visible: boolean;
  concept: Concept[];
  numbersOfPieces: number;
  defaultArticle: Article;
  sale: boolean;
  variantSizes: VariantSize[];
  swatches: any[];
  articleCodes: string[];
  ticket: string;
  searchEngineProductId: string;
  dummy: boolean;
  linkPdp: string;
  categoryName: CategoryName;
  rgbColors: string[];
  articleColorNames: string[];
  ecoTaxValue: number;
  swatchesTotal: number;
  showPriceMarker: boolean;
  redirectToPdp: boolean;
  mainCategoryCode: string;
  comingSoon: boolean;
  brandName: BrandName;
  galleryImages: GalleryImage[];
  allArticleCodes: string[];
  allArticleImages: string[];
  allArticleBaseImages: string[];
  markers?: Marker[];
  redPrice?: Price;
  sellingAttributes?: string[];
};

type Article = {
  code: string;
  name: string;
  images: GalleryImage[];
  pk: string;
  whitePrice: Price;
  logoPicture: GalleryImage[];
  normalPicture: GalleryImage[];
  visible: boolean;
  numbersOfPieces: number;
  ticket: string;
  dummy: boolean;
  ecoTaxValue: number;
  redirectToPdp: boolean;
  comingSoon: boolean;
  color: Color;
  rgbColor: string;
  genArticle?: string;
  turnToSku: string;
  videoId?: string;
  plpVideo?: boolean;
  markers?: Marker[];
  redPrice?: Price;
  percentageDiscount?: string;
  sellingAttributes?: string[];
};

type Color = {
  code: string;
  text: string;
  filterName: string;
  hybrisCode: string;
};

type GalleryImage = {
  url: string;
  baseUrl: string;
};

type Marker = {
  text: string;
  type: string;
};

type Price = {
  currencyIso: CurrencyISO;
  value: number;
  priceType: PriceType;
  formattedValue: string;
  type: Type;
};

enum CurrencyISO {
  Usd = 'USD',
}

enum PriceType {
  Buy = 'BUY',
}

enum Type {
  Red = 'RED',
  White = 'WHITE',
}

enum BrandName {
  HM = 'H&M',
}

enum CategoryName {
  Men = 'Men',
}

enum Concept {
  HMMan = 'H&M MAN',
}

type Stock = {
  stockLevel: number;
};

type VariantSize = {
  orderFilter: number;
  filterCode: string;
};
