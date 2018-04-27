import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-impact-door-and-windows',
  templateUrl: './impact-door-and-windows.component.html',
  styleUrls: ['./impact-door-and-windows.component.scss']
})
export class ImpactDoorAndWindowsComponent {
  images = [
    {
      img: './assets/images/tileRoof1.jpg',
      thumb: './assets/images/tileRoof1.jpg',
      description: 'Tile Roof'
    },
    {
      img: './assets/images/tileRoof2.jpg',
      thumb: './assets/images/tileRoof2.jpg',
      description: 'Tile Roof'
    },
    {
      img: './assets/images/tileRoof3.jpg',
      thumb: './assets/images/tileRoof3.jpg',
      description: 'Tile Roof'
    },
    {
      img: './assets/images/shingleRoof1.jpg',
      thumb: './assets/images/shingleRoof1.jpg',
      description: 'Shingle Roof'
    },
    {
      img: './assets/images/shingleRoof2.jpg',
      thumb: './assets/images/shingleRoof2.jpg',
      description: 'Shingle Roof'
    },
    {
      img: './assets/images/shingleRoof3.jpg',
      thumb: './assets/images/shingleRoof3.jpg',
      description: 'Shingle Roof'
    },
    {
      img: './assets/images/metalRoof1.JPG',
      thumb: './assets/images/metalRoof1.JPG',
      description: 'Metal Roof'
    },
    {
      img: './assets/images/metalRoof2.JPG',
      thumb: './assets/images/metalRoof2.JPG',
      description: 'Metal Roof'
    },
    {
      img: './assets/images/flatRoof1.jpg',
      thumb: './assets/images/flatRoof1.jpg',
      description: 'Flat Roof'
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
