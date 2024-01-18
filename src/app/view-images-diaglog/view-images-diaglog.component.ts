import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from '../model/file-handle.model';


@Component({
  selector: 'app-view-images-diaglog',
  templateUrl: './view-images-diaglog.component.html',
  styleUrl: './view-images-diaglog.component.css'
})
export class ViewImagesDiaglogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
  recieveImages(){

  }
}
