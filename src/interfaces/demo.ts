import { AxiosRequestConfig } from "axios"

export type ProductDatInfo = {
  productable_id: string;
  productable_type?: string;
  learn_with?: null;
  name: string;
  slogan: string;
  shop_cover_image_url: string;
  students_count: number;
  currency?: string;
  list_price: string;
  sale_price: string;
  tags: string[],
  average_rating: number;
  rating_count: number;
}

export type ProductData = {
  id: string;
  type: string;
  attributes: ProductDatInfo
}[]

export type ProductList = {
  id: string;
  type: string;
  attributes: {
    name: string;
    custom: ProductData
  }
}

export interface AxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}