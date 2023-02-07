import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill.interface';
import { BlurService } from 'src/app/services/blur.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public languages: Skill[] = [
    {
      logo: '../../../assets/img/logos/html-light.webp',
      name: 'HTML'
    },
    {
      logo: '../../../assets/img/logos/css-light.webp',
      name: 'CSS'
    },
    {
      logo: '../../../assets/img/logos/sass-light.webp',
      name: 'SASS'
    },
    {
      logo: '../../../assets/img/logos/js-light.webp',
      name: 'JavaScript'
    },
    {
      logo: '../../../assets/img/logos/ts-light.webp',
      name: 'TypeScript'
    },
    {
      logo: '../../../assets/img/logos/php-light.webp',
      name: 'PHP'
    },
    {
      logo: '../../../assets/img/logos/java-light.webp',
      name: 'Java'
    },
    {
      logo: '../../../assets/img/logos/swift-light.webp',
      name: 'Swift'
    },
    {
      logo: '../../../assets/img/logos/c-light.webp',
      name: 'C'
    },
  ]

  public tools: Skill[] = [
    {
      logo: '../../../assets/img/logos/angular-light.webp',
      name: 'Angular'
    },
    {
      logo: '../../../assets/img/logos/react-light.webp',
      name: 'React'
    },
    {
      logo: '../../../assets/img/logos/bootstrap-light.webp',
      name: 'Bootstrap'
    },
    {
      logo: '../../../assets/img/logos/tailwind-light.webp',
      name: 'Tailwind'
    },
    {
      logo: '../../../assets/img/logos/spring-light.webp',
      name: 'Spring Boot'
    },
    {
      logo: '../../../assets/img/logos/mysql-light.webp',
      name: 'MySQL'
    },
    {
      logo: '../../../assets/img/logos/mongo-light.webp',
      name: 'Mongo'
    },
    {
      logo: '../../../assets/img/logos/firebase-light.webp',
      name: 'Firebase'
    },
    {
      logo: '../../../assets/img/logos/git-light.webp',
      name: 'Git'
    },
  ]

  public softwares: Skill[] = [
    {
      logo: '../../../assets/img/logos/visual-light.webp',
      name: 'Visual Studio Code'
    },
    {
      logo: '../../../assets/img/logos/xcode-light.webp',
      name: 'Xcode'
    },
    {
      logo: '../../../assets/img/logos/androidstudio-light.webp',
      name: 'Android Studio'
    },
    {
      logo: '../../../assets/img/logos/postman-light.webp',
      name: 'PostMan'
    },
    {
      logo: '../../../assets/img/logos/netbeans-light.webp',
      name: 'NetBeans'
    },
    {
      logo: '../../../assets/img/logos/justinmind-light.webp',
      name: 'Just in Mind'
    },
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

  public blurSiblings() {
    this.blur.blurSiblings()
  }

  public clearSiblings() {
    this.blur.clearSiblings()
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.hideSideMenu = result.matches ? true : false
      this.isMobile = result.matches ? true : false
      this.device = result.matches ? 'mobile' : 'pc'
    })
  }

}
