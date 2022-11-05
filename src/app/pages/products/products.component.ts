import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image1 = 'assets/images/1.jpg'
  image2 = 'assets/images/2.jfif'
  image3 = 'assets/images/3.jfif'
  image4 = 'assets/images/4.jfif'
  image5 = 'assets/images/5.jpg'
  image6 = 'assets/images/6.jpg'
  image7 = 'assets/images/7.jpg'
}
