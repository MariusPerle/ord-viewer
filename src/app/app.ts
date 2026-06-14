import { Component } from '@angular/core';
import { SelectFile } from './select-file/select-file';
import { Viewer } from './viewer/viewer';

@Component({
  selector: 'ord-root',
  imports: [SelectFile, Viewer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
