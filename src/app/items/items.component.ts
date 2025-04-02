import { Component } from '@angular/core';
import Item from '../item/Item'

@Component({
  selector: 'app-items',
  standalone: false,
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
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
}
