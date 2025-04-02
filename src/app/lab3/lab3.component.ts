import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lab3',
  standalone: false,
  templateUrl: './lab3.component.html',
  styleUrl: './lab3.component.css'
})
export class Lab3Component {
  productName = input.required<string>();
  // productPhoto = input("Product Photo");
  productPriceOld = input.required<number>();
  productDescription = input("Product Description");
  productButton = input<string>("Buy Now");
  productQuantity: number = 1;
  productPrice: number = 15000;
  totalPrice: number = this.productPrice; 
  productPhoto:string = "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0r6mli5byst05.webp"
  selectedColor: string = 'red'; 


  constructor() {}

  handleClick(message: string) {
    alert("Buy Now!: " + message);
  }

  tang() {
    this.productQuantity++;
    this.updateTotalPrice();
  }

  giam() {
    if (this.productQuantity > 1) {
      this.productQuantity--;
      this.updateTotalPrice();
    }
  }

  handleQuantityChange(event: any) {
    let value = Number(event.target.value);
    if (isNaN(value) || value < 1) {
      value = 1;
    }
    this.productQuantity = value;
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = this.productQuantity * this.productPrice;
  }

  

  colorImages: { [key: string]: string } = {
    red: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0r6mli5byst05.webp",
    black: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0r6ev8kkvsdca.webp",
    white: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0r6mbjxw5ppf4.webp",
    grey: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0r6ev8kjh7xaa.webp"
  };

  changeColor(color: string) {
    this.selectedColor = color;
    this.productPhoto = this.colorImages[color];
  }
}

