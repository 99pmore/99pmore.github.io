import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() school: Card | undefined

  @Input() company: Card | undefined

  @Input() certification: Card | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
