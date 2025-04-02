import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  standalone: false,
  templateUrl: './hello-angular.component.html',
  styleUrl: './hello-angular.component.css'

})
export class HelloAngularComponent {
  nameProduct = "Bed Side Table";
  price = "15,000"
  description = " A beautiful side table that will perfectly fit your lovely bedroom.";
  size = [
    "45*53",
    "42*40",
    "40*40", 
    "35*49"
  ]
  isValid = false;
  textClasses = {
    textRed : !this.isValid
  }
  canSave = true;
  isUnchanged = false;
  isSpecial = true;
  textStyle = {
    "font-style": !this.canSave ? "italic": "normal"
  }
  isDisplay = true
  quantity: number = 1;
  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
