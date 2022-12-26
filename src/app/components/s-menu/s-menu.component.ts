import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-menu',
  templateUrl: './s-menu.component.html',
  styleUrls: ['./s-menu.component.scss']
})
export class SMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    document.querySelector('.bg')?.classList.toggle('bg-open')
    document.querySelector('.nav')?.classList.toggle('nav-open')
  }

}
