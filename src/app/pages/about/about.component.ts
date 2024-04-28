import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card.interface';
import { BlurService } from 'src/app/services/blur.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
