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
    this.slidePlay();
  }

  slidePlay() {
    let swiper = new Swiper('#homeBan', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        autoplayDisableOnInteraction: false
      },
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '#homeBanPagi',
        clickable: true,
      },
      navigation: {
        nextEl: '#homeBanNext',
        prevEl: '#homeBanNext',
      },
    });
  }
}
