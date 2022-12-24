import { Component, Input, OnInit } from '@angular/core';
import { Logo } from 'src/app/models/PortfolioLogo.interface';

@Component({
  selector: 'app-portfolio-logo',
  templateUrl: './portfolio-logo.component.html',
  styleUrls: ['./portfolio-logo.component.scss']
})
export class PortfolioLogoComponent implements OnInit {

  @Input() logo!: Logo

  constructor() { }

  ngOnInit(): void {
  }

}
