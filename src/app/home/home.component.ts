import { Component, Renderer2, NgZone } from '@angular/core';

import { register } from 'swiper/element/bundle';
import { Products } from '../models/products';
import { ProductserviceService } from '../services/productservice.service';
register();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  hour: any;
  minute: any;
  second: any;
  day: any;
  intervalid: any;
  num = 0;

  arr: any = [];

  // tableprod:Products[]=[]
  tableprodtodays: any = [];
  tablemonth: any = [];
  ourproduct: any = [];

  constructor(
    private serviceproductToday: ProductserviceService,
    private ngzone: NgZone
  ) {}

  ngOnInit(): void {
    this.getprodtodays();
    this.getmonth();
    this.getproduct();

    this.ngzone.runOutsideAngular(() => {
      this.intervalid = setInterval(() => {
        this.ngzone.run(() => {
          this.timestoday();
          this.hidecart();
        });
      }, 1000);
    });

    var loc = localStorage.getItem('cardProd');

    if (loc != null) {
      this.arr = JSON.parse(loc);
    } else {
      this.arr = [];
    }
  }

  ngOnDestroy(): void {
    if (this.intervalid) {
      clearInterval(this.intervalid);
    }
  }

  getprodtodays() {
    this.tableprodtodays = this.serviceproductToday.producttabletodays;
  }

  getmonth() {
    this.tablemonth = this.serviceproductToday.prodmonth;
  }

  getproduct() {
    this.ourproduct = this.serviceproductToday.ourproducts;
  }

  timestoday() {
    var currenttime = new Date();
    var times = new Date('Sep 18,2024 00:00:00');

    var targettime = times.getTime() - currenttime.getTime();

    this.second = Math.round(targettime / 1000) % 60;
    this.minute = Math.round(targettime / (1000 * 60)) % 60;
    this.hour = Math.round(targettime / (1000 * 60 * 60)) % 24;
    this.day = Math.round(targettime / (1000 * 60 * 60 * 24));

    var discount = document.querySelectorAll(
      '#todays .carts_discount .discount'
    );

    if (
      this.second == 0 &&
      this.minute == 0 &&
      this.hour == 0 &&
      this.day == 0
    ) {
      discount.forEach((dis) => {
        dis.remove();
      });
    }
  }

  showAddcart(i: any) {
    var msg_addcart = document.querySelector('.msg_addcart') as HTMLElement;
    msg_addcart?.classList.add('show');
    this.arr.push(i);
    localStorage.setItem('cardProd', JSON.stringify(this.arr));
    // emitChange 
  }

  hidecart() {
    var msg_addcart = document.querySelector('.msg_addcart') as HTMLElement;
    msg_addcart?.classList.remove('show');
  }
}
