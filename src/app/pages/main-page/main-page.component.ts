import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc: 'assets/images/codigo-descuento-ferreteria.jpg',
      imageAlt: "descuento"
    },
    {
      imageSrc: 'assets/images/FerreteríaExitosa.jpg',
      imageAlt: "Ferreteria"
    }
  ]
}
