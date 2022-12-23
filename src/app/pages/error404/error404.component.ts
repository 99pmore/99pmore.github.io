import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  public text: string = '404'
  public textSize = '10rem'

  constructor() { }

  ngOnInit(): void {
  }

}
