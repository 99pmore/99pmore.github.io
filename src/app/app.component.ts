import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pablo_Moreno_Martin';

  ngOnInit(): void {
    window.scroll(0,0)
  }
}
