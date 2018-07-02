import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-headerBar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.scss']
})

export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  handle(index: string): void {
    console.log(index);
  }
}
