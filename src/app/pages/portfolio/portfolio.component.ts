import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private URL_LOGOS = '../../../assets/img/logos'
  private URL_PROJECTS = '../../../assets/img/projects'

  public projects: Project[] = [
    {
      name: 'Mi web portfolio',
      tools: [ this.URL_LOGOS + '/angular-light.png', this.URL_LOGOS + '/html-light.png', this.URL_LOGOS + '/sass-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/git-light.png'],
      description: 'Web currículum y portfolio, desarrollado en Angular',
      image: this.URL_PROJECTS + '/miweb-angular.png',
    },
    {
      name: 'Mytho',
      tools: [ this.URL_LOGOS + '/html-light.png', this.URL_LOGOS + '/sass-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/git-light.png'],
      description: 'Sitio web sobre mitología, desarrollado en HTML y SCSS',
      image: this.URL_PROJECTS + '/mytho.webp',
    },
    {
      name: 'CV Web',
      tools: [ this.URL_LOGOS + '/html-light.png', this.URL_LOGOS + '/sass-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/git-light.png'],
      description: 'Web currículum y portfolio, desarrollado en HTML y SCSS',
      image: this.URL_PROJECTS + '/miweb.webp',
    },
    {
      name: 'Yourney',
      tools: [ this.URL_LOGOS + '/swift-light.png', this.URL_LOGOS + '/java-light.png', this.URL_LOGOS + '/xcode-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/spring-light.png', this.URL_LOGOS + '/mongo-light.png'],
      description: '(TFG) Aplicación de gestión de viajes para iOS, desarrollado en Swift para el Front y en Java Spring Boot para el Back',
      image: this.URL_PROJECTS + '/yourney.webp',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
