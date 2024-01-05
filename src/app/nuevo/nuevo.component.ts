import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent{
  @Input() image: string ="";
  @Input() description: string="";
  constructor() { }
}