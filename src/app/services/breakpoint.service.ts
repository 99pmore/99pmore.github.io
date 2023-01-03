import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  public isMobile: boolean = false

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  public getIsMobile() {
    return this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small]);
  }

  public getIsLaptop() {
    return this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large]);
  }
}
