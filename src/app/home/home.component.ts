import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });
  }
}
