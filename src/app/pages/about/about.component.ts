import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/models/Card.interface';
import { BlurService } from 'src/app/services/blur.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public schools: Card[] = [
    {
      date: 'may. 2022 - actualidad',
      title: 'Máster en Desarrollo Web FullStack',
      location: 'Escuela Internacional de Posgrados y UEMC',
      logo: '../../../assets/img/eip-light.png'
    },
    {
      date: 'sep. 2017 - ene. 2022',
      title: 'Grado en Ingeniería Informática',
      location: 'Universidad Politécnica de Madrid',
      logo: '../../../assets/img/upm-light.png'
    },
    {
      date: '2015 - 2017',
      title: 'Bachillerato tecnológico',
      location: 'CEU San Pablo Montepríncipe',
      logo: '../../../assets/img/ceu-light.png'
    }
  ]

  public companies: Card[] = [
    {
      date: 'sep. 2021 - mar. 2022',
      title: 'Prácticas en Desarrollo Móvil',
      location: 'INETUM España',
      logo: '../../../assets/img/inetum-light.png'
    }
  ]

  public certifications: Card[] = [
    {
      title: 'IT Specialist - JavaScript',
      location: 'Certiport - A Pearson VUE Business',
      logo: '../../../assets/img/it-light.png'
    },
    {
      title: 'Curso de Introducción al Desarrollo Web II certificado por el IEI de la Universidad de Alicante',
      location: 'Google Actívate',
      logo: '../../../assets/img/google-light.png'
    },
    {
      title: 'Curso de Introducción al Desarrollo Web I certificado por el IEI de la Universidad de Alicante',
      location: 'Google Actívate',
      logo: '../../../assets/img/google-light.png'
    },
    {
      title: 'B2 First Certificate in English',
      location: 'Cambridge University',
      logo: '../../../assets/img/cambridge-light.png'
    }
  ]

  constructor(private blur: BlurService) { }

  ngOnInit(): void {
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

}
