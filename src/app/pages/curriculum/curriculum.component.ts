import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card.interface';
import { BlurService } from 'src/app/services/blur.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  public schools: Card[] = [
    {
      date: 'may. 2022 - actualidad',
      title: 'Máster en Desarrollo Web FullStack',
      location: 'Escuela Internacional de Posgrados y UEMC',
      logo: '../../../assets/img/inst-logos/eip-light.webp'
    },
    {
      date: 'sep. 2017 - ene. 2022',
      title: 'Grado en Ingeniería Informática',
      location: 'Universidad Politécnica de Madrid',
      logo: '../../../assets/img/inst-logos/upm-light.webp'
    },
    {
      date: '2015 - 2017',
      title: 'Bachillerato tecnológico',
      location: 'CEU San Pablo Montepríncipe',
      logo: '../../../assets/img/inst-logos/ceu-light.webp'
    }
  ]

  public companies: Card[] = [
    {
      date: 'sep. 2021 - mar. 2022',
      title: 'Prácticas en Desarrollo Móvil',
      location: 'INETUM España',
      logo: '../../../assets/img/inst-logos/inetum-light.webp'
    }
  ]

  public certifications: Card[] = [
    {
      // date: '5 jun. 2023',
      title: 'Certificación IT Specialist - HTML & CSS',
      location: 'Certiport - A Pearson VUE Business',
      logo: '../../../assets/img/inst-logos/it-light.webp'
    },
    {
      // date: '17 nov. 2022',
      title: 'Certificación IT Specialist - JavaScript',
      location: 'Certiport - A Pearson VUE Business',
      logo: '../../../assets/img/inst-logos/it-light.webp'
    },
    {
      // date: '21 feb. 2023',
      title: 'React Hooks esencial',
      location: 'LinkedIn Learning',
      logo: '../../../assets/img/inst-logos/linkedin-light.webp'
    },
    {
      // date: '8 ene. 2023',
      title: 'Curso Desarrollador de JavaScript (React)',
      location: 'Capacítate para el empleo - Fundación Carlos Slim',
      logo: '../../../assets/img/inst-logos/capacitate-light.webp'
    },
    {
      // date: '9 ene. 2023',
      title: 'Curso React JS Desde Cero',
      location: 'Udemy',
      logo: '../../../assets/img/inst-logos/udemy-light.webp'
    },
    {
      // date: '13 abr. 2022',
      title: 'Curso de Introducción al Desarrollo Web II certificado por el IEI de la Universidad de Alicante',
      location: 'Google Actívate',
      logo: '../../../assets/img/inst-logos/google-light.webp'
    },
    {
      // date: '31 mar. 2022',
      title: 'Curso de Introducción al Desarrollo Web I certificado por el IEI de la Universidad de Alicante',
      location: 'Google Actívate',
      logo: '../../../assets/img/inst-logos/google-light.webp'
    },
    {
      // date: '2017',
      title: 'B2 First Certificate in English',
      location: 'Cambridge University',
      logo: '../../../assets/img/inst-logos/cambridge-light.webp'
    }
  ]

  public hideSideMenu: boolean = false
  public isMobile: boolean = false

  public device: string = 'mobile'

  constructor(
    private blur: BlurService,
    private breakpointService: BreakpointService
    ) { }

  ngOnInit(): void {
    this.getIsMobile()
    window.scroll(0,0)
  }

  public downloadFile() {
    const fileUrl = '../../../assets/docs/Pablo Moreno Martín CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Pablo_Moreno_Martin.pdf';
    link.click();
  }

  public blurSiblings() {
    this.blur.blurSiblings()
  }

  public clearSiblings() {
    this.blur.clearSiblings()
  }

  public goToNotion() {
    window.open('https://quill-spark-3af.notion.site/CV-Pablo-Moreno-Mart-n-68686053b8e94ec2bab3244ed01616a6', '_blank');
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.hideSideMenu = result.matches ? true : false
      this.isMobile = result.matches ? true : false
      this.device = result.matches ? 'mobile' : 'pc'
    })
  }

}
