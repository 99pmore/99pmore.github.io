import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public hideSideMenu: boolean = false
  public isMobile: boolean = false
  public isLaptop: boolean = false

  public device: string = 'mobile'

  constructor(
    private breakpointService: BreakpointService
  ) { }

  ngOnInit(): void {
    this.getIsMobile()
    this.getIsLaptop()
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.hideSideMenu = result.matches ? true : false
      this.isMobile = result.matches ? true : false
      this.device = result.matches ? 'mobile' : 'pc'
    })
  }

  private getIsLaptop() {
    this.breakpointService.getIsLaptop().subscribe(result => {
      this.isLaptop = result.matches ? true : false
    })
  }

}
