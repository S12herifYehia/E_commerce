import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor() {}

  producttabletodays = [
    {
      imgurl: 'assets/home/todays1.png',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      discount: 160,
    },
    {
      imgurl: 'assets/home/todays2.png',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      discount: 160,
    },
    {
      imgurl: 'assets/home/todays3.png',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      discount: 160,
    },
    {
      imgurl: 'assets/home/todays4.png',
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      discount: 160,
    },
  ];



  prodmonth=[
    {imgurl:'assets/home/month1.png',title:'The north coat',price:120,discount:160},
    {imgurl:'assets/home/month2.png',title:'Gucci duffle bag',price:120,discount:160},
    {imgurl:'assets/home/month3.png',title:'RGB liquid CPU Cooler',price:120,discount:160},
    {imgurl:'assets/home/month4.png',title:'Small BookSelf',price:120,discount:160},
  ]




  ourproducts=[
    {imgurl:"assets/home/product1.jpeg",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product2.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product3.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product4.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product5.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product6.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product7.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product8.png",title:'assets/home/product1.jpeg',price:120,discount:160},
  ]
}
