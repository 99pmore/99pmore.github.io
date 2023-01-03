import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  public text: string = '404'
  public textSize: string = '10rem'

  public isMobile: boolean = false

  constructor(
    private breakpointService: BreakpointService
    ) { }

  ngOnInit(): void {
    this.getIsMobile()
    window.scroll(0,0)
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.isMobile = result.matches ? true : false
      this.textSize = result.matches ? '5rem' : '10rem'
    })
  }

}
