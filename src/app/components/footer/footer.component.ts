import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isMobile: boolean = false

  constructor(
    private breakpointService: BreakpointService
  ) { }

  ngOnInit(): void {
    this.getIsMobile()
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.isMobile = result.matches ? true : false
    })
  }

}
