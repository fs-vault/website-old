import { fadeAnimation } from '../../../animations/fade.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [fadeAnimation]
})
export class MainLayoutComponent {

  constructor() { }

}
