export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface BrandsResponse {
  results: number;
  data: Brand[];
}