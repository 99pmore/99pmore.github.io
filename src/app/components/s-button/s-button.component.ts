import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-button',
  templateUrl: './s-button.component.html',
  styleUrls: ['./s-button.component.scss']
})
export class SButtonComponent implements OnInit {

  @Input() text!: string

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
        }
    })
  }

}
