import { FileHandle } from 'fs/promises';

export interface Product {
  productId:any,
  productname: string;
  productdescription: string;
  productprice: number;
  discountprice: number;
  productImages: FileHandle[];
}
