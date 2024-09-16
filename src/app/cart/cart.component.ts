import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  arr:any=[];

  

  constructor(){
    this.getProd();
  }




  getProd() {
    var loc=localStorage.getItem('cardProd')
    if (loc != null) {
      this.arr = JSON.parse(loc);
    } else {
      this.arr = [];
    }
  }


  remove(i:any){

   this.arr.splice(i,1)
    localStorage.setItem('cardProd',JSON.stringify(this.arr));

  }
}
