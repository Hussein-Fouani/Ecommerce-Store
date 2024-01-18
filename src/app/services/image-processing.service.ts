import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { FileHandle } from '../model/file-handle.model'; // Import the correct FileHandle type

@Injectable({
  providedIn: 'root',
})
export class ImageProcessingService {
  constructor(private sanitizer: DomSanitizer) {}
  public createImages(product: Product) {
    const pdimages: any[] = product.productImages;
    const productimagetofile: FileHandle[] = [];
    for (let i = 0; i < productimagetofile.length; i++) {
      const pdimage = pdimages[i];
      const file = this.dataURIToBlob(pdimage.picbyte, pdimage.type);
      const imagefile = new File([file], pdimage.name, { type: pdimage.type });
      const filehandle: FileHandle = {
        file: imagefile,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(imagefile)
        ),
      };
      productimagetofile.push(filehandle);
    }
   product.productImages = productimagetofile;
   return product;
  }
  public dataURIToBlob(picbytes: string, imageType: any) {
    const byteString = window.atob(picbytes);
    const arraybuffer = new ArrayBuffer(byteString.length);
    
    const int8Array = new Uint8Array(arraybuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], { type: imageType });
  }
}
