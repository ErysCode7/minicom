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
  concept: string[];
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
  categoryName: string;
  rgbColors: string[];
  articleColorNames: string[];
  ecoTaxValue: number;
  swatchesTotal: number;
  showPriceMarker: boolean;
  redirectToPdp: boolean;
  mainCategoryCode: string;
  comingSoon: boolean;
  brandName: string;
  galleryImages: GalleryImage[];
  allArticleCodes: string[];
  allArticleImages: string[];
  allArticleBaseImages: string[];
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
  genArticle: string;
  turnToSku: string;
  videoId: string;
  plpVideo: boolean;
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

type Price = {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  type: string;
};

type Stock = {
  stockLevel: number;
};

type VariantSize = {
  orderFilter: number;
  filterCode: string;
};
