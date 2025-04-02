import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  standalone: false,
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  productForm: FormGroup;
  selectedImages: string[] = [];
  
  availableColors: string[] = ['Đỏ', 'Xanh dương', 'Xanh lá', 'Vàng', 'Tím', 'Đen', 'Trắng'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(250)]],
      price: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
      colors: this.fb.array([]), 
      photos: [[], Validators.required]
    });
  }

  // Getter cho colors
  get colors(): FormArray {
    return this.productForm.get('colors') as FormArray;
  }

  // Khi chọn màu từ danh sách
  onColorSelected(event: any) {
    const selectedColor = event.target.value;
    if (selectedColor && !this.colors.value.includes(selectedColor)) {
      this.colors.push(this.fb.control(selectedColor)); 
    }
  }

  // Xóa màu đã chọn
  removeColor(index: number) {
    this.colors.removeAt(index);
  }

  // Xử lý chọn ảnh
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      for (let file of event.target.files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
      this.productForm.patchValue({ photos: event.target.files });
    }
  }

  // Xử lý khi Submit
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Data:', this.productForm.value);
      alert('Sản phẩm đã được tạo thành công!');
      this.productForm.reset();
      this.selectedImages = [];
      this.colors.clear(); 


    }
  }
}