import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project!: Project

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
