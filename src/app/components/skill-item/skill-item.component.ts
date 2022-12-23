import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill.interface';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() language: Skill | undefined

  @Input() tool: Skill | undefined

  @Input() software: Skill | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
