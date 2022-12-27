import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  public text: string = '404'
  public textSize = '10rem'

  public isPhone = false

  constructor(
    private responsive: BreakpointObserver
    ) { }

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,      
      ])
      .subscribe(result => {
        this.isPhone = false

        if (result.matches) {
          this.isPhone = true
          this.textSize = '5rem'
        }
    })
  }

}
