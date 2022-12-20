import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    const fileUrl = '../../../assets/docs/Pablo Moreno Martín CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Pablo_Moreno_Martin.pdf';
    link.click();
  }

}
