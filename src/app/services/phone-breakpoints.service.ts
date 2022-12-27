import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneBreakpointsService {

  public hideSideMenu = false
  public isPhone = false

  public device = 'phone'

  constructor(
    private responsive: BreakpointObserver
  ) { }

  public setToPhone() {
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

          this.device = 'laptop'
        }
    })
  }
}
