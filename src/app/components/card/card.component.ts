import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() school!: Card

  @Input() company!: Card

  @Input() certification!: Card

  constructor() { }

  ngOnInit(): void {
  }

}
