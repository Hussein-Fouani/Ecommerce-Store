import { Directive, HostBinding, HostListener, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './model/file-handle.model';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  @HostBinding('style.backround') private background = '#eee';
  constructor(private sanitizer: DomSanitizer) {}

  @Output() files: EventEmitter<FileHandle> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  public onDragEvent(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }
  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';

    const filehandle = evt.dataTransfer?.files[0];
    if (filehandle) {
      const url = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(filehandle)
      );
      const file: FileHandle = { file: filehandle, url: url };
      this.files.emit(file);
    }
  }
}
