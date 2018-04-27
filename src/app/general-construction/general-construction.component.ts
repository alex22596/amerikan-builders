import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-general-construction',
  templateUrl: './general-construction.component.html',
  styleUrls: ['./general-construction.component.scss']
})
export class GeneralConstructionComponent {
  images = [
    {
      img: './assets/images/generalConstruction1.jpg',
      thumb: './assets/images/generalConstruction1.jpg',
      description: 'General Construction'
    },
    {
      img: './assets/images/generalConstruction2.jpg',
      thumb: './assets/images/generalConstruction2.jpg',
      description: 'General Construction'
    },
    {
      img: './assets/images/generalConstruction3.jpg',
      thumb: './assets/images/generalConstruction3.jpg',
      description: 'General Construction'
    }
  ];

  @ViewChild('lightbox') public el: any;

  @HostListener('swiperight', ['$event'])
  public swipePrev() {
    this.el.prevImage();
  }

  @HostListener('swipeleft', ['$event'])
  public swipeNext() {
    this.el.nextImage();
  }
}
