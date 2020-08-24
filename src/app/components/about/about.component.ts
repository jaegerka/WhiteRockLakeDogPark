import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infoExpanded: boolean = false;
  infomore: boolean = true;

  expandInfo() {
    if (this.infoExpanded == false) {
      this.infoExpanded = true;
    } else {
      this.infoExpanded = false;
    }

    if (this.infomore == true) {
      this.infomore = false;
    } else {
      this.infomore = true;
    }
  }

}
