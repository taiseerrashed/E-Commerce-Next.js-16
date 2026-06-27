export type TCredentials = {
  email: string;
  password: string;
}
export type TUserData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
}

export type TUser = {
  name: string;
  email: string;
  role: string;
}
export interface IAuthResponse {
  message: string;
  user: TUser;
  token: string;
}

type TReview = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type TDimensions = {
  width: number;
  height: number;
  depth: number;
};

type TMeta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: TDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: TReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: TMeta;
  images: string[];
  thumbnail: string;
};

export type TCategory = {
  slug: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};

export interface IApiResponse<T> {
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: T[];
}
export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type TCategoriesResponse = IApiResponse<ICategory>;
export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type TBrandsResponse = IApiResponse<IBrand>;

export interface ISubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface IProduct {
  sold: number;
  images: string[];
  subcategory: ISubCategory[];

  ratingsQuantity: number;
  ratingsAverage: number;

  _id: string;

  title: string;
  slug: string;
  description: string;

  quantity: number;
  price: number;

  imageCover: string;

  category: ICategory;
  brand: IBrand;

  createdAt: string;
  updatedAt: string;
}

export type TProductsResponse = IApiResponse<IProduct>;