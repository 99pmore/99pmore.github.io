import { Component, OnInit } from '@angular/core';
import { Logo } from 'src/app/models/PortfolioLogo.interface';
import { Project } from 'src/app/models/Project.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private URL_LOGOS = '../../../assets/img/logos'
  private URL_PROJECTS = '../../../assets/img/projects'
  private URL_PROJECTS_LOGOS = '../../../assets/img/projects/logos'

  public projects: Project[] = [
    {
      name: 'Mi web portfolio',
      tools: [ this.URL_LOGOS + '/angular-light.png', this.URL_LOGOS + '/html-light.png', this.URL_LOGOS + '/sass-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/git-light.png'],
      description: 'Web currículum y portfolio, desarrollado en Angular',
      image: this.URL_PROJECTS + '/miweb-angular.png',
      link: 'https://99pmore.github.io'
    },
    {
      name: 'Mytho',
      tools: [ this.URL_LOGOS + '/html-light.png', this.URL_LOGOS + '/sass-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/git-light.png'],
      description: 'Sitio web sobre mitología, desarrollado en HTML y SCSS',
      image: this.URL_PROJECTS + '/mytho.webp',
      link: 'https://99pmore.github.io/Mytho/'
    },
    {
      name: 'CV Web',
      tools: [ this.URL_LOGOS + '/html-light.png', this.URL_LOGOS + '/sass-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/git-light.png'],
      description: 'Web currículum y portfolio, desarrollado en HTML y SCSS',
      image: this.URL_PROJECTS + '/miweb.webp',
      link: 'https://99pmore.github.io/CV_Web/'
    },
    {
      name: 'Yourney',
      tools: [ this.URL_LOGOS + '/swift-light.png', this.URL_LOGOS + '/java-light.png', this.URL_LOGOS + '/xcode-light.png', this.URL_LOGOS + '/visual-light.png', this.URL_LOGOS + '/spring-light.png', this.URL_LOGOS + '/mongo-light.png'],
      description: '(TFG) Aplicación de gestión de viajes para iOS, desarrollado en Swift para el Front y en Java Spring Boot para el Back',
      image: this.URL_PROJECTS + '/yourney.webp',
      link: 'https://drive.google.com/file/d/1zWr4npBiY1QVoZ0Js8NGUcRvLfWliwWs/view'
    },
  ]

  public logos: Logo[] = [
    {
      name: 'Mi logo',
      logo: this.URL_PROJECTS_LOGOS + '/mylogo.jpg'
    },
    {
      name: 'Boda J&M',
      logo: this.URL_PROJECTS_LOGOS + '/wedding-light.png'
    },
    {
      name: 'Mytho',
      logo: this.URL_PROJECTS_LOGOS + '/mytho.webp'
    },
    {
      name: 'Yourney',
      logo: this.URL_PROJECTS_LOGOS + '/yourney.webp'
    },
    {
      name: 'Madrid',
      logo: this.URL_PROJECTS_LOGOS + '/madrid.webp'
    },
    {
      name: 'Sit&Com',
      logo: this.URL_PROJECTS_LOGOS + '/sitcom.png'
    },
    {
      name: 'RFEF',
      logo: this.URL_PROJECTS_LOGOS + '/rfef.webp'
    },
    {
      name: 'My Thot',
      logo: this.URL_PROJECTS_LOGOS + '/mythot.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
