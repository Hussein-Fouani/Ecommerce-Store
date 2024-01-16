import { SafeUrl } from "@angular/platform-browser";
import { File } from "buffer";

export interface FileHandle{
    file:File,
    url:SafeUrl
}   