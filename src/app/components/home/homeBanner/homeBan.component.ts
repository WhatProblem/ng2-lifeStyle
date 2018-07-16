import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'home-homeBan',
  templateUrl: './homeBan.component.html',
  styleUrls: ['./homeBan.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeBanComponent implements OnInit {
  private label: string = 'test';
  private testArr: object = ['第一个', '第二个', '第三个'];
  constructor() { }

  ngOnInit() {

  }

  slidePlay() {
    let swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
