import { SafeUrl } from "@angular/platform-browser";

export interface FileHandle {
  file?: File; // Make 'file' property optional
  url: SafeUrl;
}   