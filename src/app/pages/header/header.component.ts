import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public hideSideMenu = false
  public isPhone = false
  public isLaptop = false

  public device = 'phone'

  constructor(
    private responsive: BreakpointObserver
  ) { }

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,      
      ])
      .subscribe(result => {

        this.hideSideMenu = false
        this.isPhone = false

        this.device = 'phone'

        if (result.matches) {
          this.hideSideMenu = true
          this.isPhone = true

          this.device = 'pc'
        }
    })

    this.responsive.observe([
      Breakpoints.Medium,
      Breakpoints.Large      
      ])
      .subscribe(result => {

        this.isLaptop = false

        if (result.matches) {
          this.isLaptop = true
        }
    })
  }

}
