import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() school: any

  @Input() company: any

  @Input() certification: any

  constructor() { }

  ngOnInit(): void {
  }

}
