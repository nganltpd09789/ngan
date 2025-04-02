import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Item from '../item/Item';
@Component({
  selector: 'app-item-detail',
  standalone: false,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

  itemId!: number;
  item: Item | undefined;
  items : Item[] = [
      {id: 1, name: "Áo", description: "abc",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 2, name: "Quần", description: "def",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 3, name: "Vớ", description: "ghi",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 4, name: "Nón", description: "jkl",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 5, name: "Túi", description: "mno",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 6, name: "Balo", description: "pqr",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 7, name: "Điện thoại", description: "stu",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 8, name: "Giày", description: "vwx",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 9, name: "Dép", description: "yza",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20},
      {id: 10, name: "Dép", description: "bcd",image: "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",price: 20}
    ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Lấy ID từ URL
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    // Tìm item theo ID
    this.item = this.items.find(i => i.id === this.itemId);
  }
  // description = input.required<string>();
  // price = input.required<number>();
}
