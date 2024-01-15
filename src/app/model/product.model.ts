import { FileHandle } from 'fs/promises';

export interface Product {
  productname: string;
  productdescription: string;
  productprice: number;
  discountprice: number;
  productImages: FileHandle[];
}
