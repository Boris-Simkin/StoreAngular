import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  constructor() { }

  @ViewChild('sidenav') sidenav: any;

  ngOnInit() {
  }

  toggle() {
      this.sidenav.open();
  }

}
