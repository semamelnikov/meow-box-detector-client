import { Component, Input, OnInit } from '@angular/core';
import { TotalCatInfo } from '../core/model/statistics.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: [ './cat.component.css' ]
})
export class CatComponent implements OnInit {

  photos = [
    'assets/cat1.jpg',
    'assets/cat2.jpg',
    'assets/cat3.png',
    'assets/cat4.jpg',
  ];

  catPhoto: string;

  @Input() totalCatInfo: TotalCatInfo;

  ngOnInit(): void {
    this.catPhoto = this.getCatPhoto();
  }

  private getCatPhoto() {
    return this.photos[Math.floor(Math.random() * this.photos.length)];
  }
}
