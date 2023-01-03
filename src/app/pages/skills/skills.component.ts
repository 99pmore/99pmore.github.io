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
      logo: '../../../assets/img/logos/html-light.png',
      name: 'HTML'
    },
    {
      logo: '../../../assets/img/logos/css-light.png',
      name: 'CSS'
    },
    {
      logo: '../../../assets/img/logos/sass-light.png',
      name: 'SASS'
    },
    {
      logo: '../../../assets/img/logos/js-light.png',
      name: 'JavaScript'
    },
    {
      logo: '../../../assets/img/logos/ts-light.png',
      name: 'TypeScript'
    },
    {
      logo: '../../../assets/img/logos/java-light.png',
      name: 'Java'
    },
    {
      logo: '../../../assets/img/logos/swift-light.png',
      name: 'Swift'
    },
    {
      logo: '../../../assets/img/logos/c-light.png',
      name: 'C'
    },
  ]

  public tools: Skill[] = [
    {
      logo: '../../../assets/img/logos/angular-light.png',
      name: 'Angular'
    },
    {
      logo: '../../../assets/img/logos/bootstrap-light.png',
      name: 'Bootstrap'
    },
    {
      logo: '../../../assets/img/logos/tailwind-light.png',
      name: 'Tailwind'
    },
    {
      logo: '../../../assets/img/logos/spring-light.png',
      name: 'Spring Boot'
    },
    {
      logo: '../../../assets/img/logos/mysql-light.png',
      name: 'MySQL'
    },
    {
      logo: '../../../assets/img/logos/mongo-light.png',
      name: 'Mongo'
    },
    {
      logo: '../../../assets/img/logos/git-light.png',
      name: 'Git'
    },
  ]

  public softwares: Skill[] = [
    {
      logo: '../../../assets/img/logos/visual-light.png',
      name: 'Visual Studio Code'
    },
    {
      logo: '../../../assets/img/logos/xcode-light.png',
      name: 'Xcode'
    },
    {
      logo: '../../../assets/img/logos/androidstudio-light.png',
      name: 'Android Studio'
    },
    {
      logo: '../../../assets/img/logos/postman-light.png',
      name: 'PostMan'
    },
    {
      logo: '../../../assets/img/logos/netbeans-light.png',
      name: 'NetBeans'
    },
    {
      logo: '../../../assets/img/logos/justinmind-light.png',
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
