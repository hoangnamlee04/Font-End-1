import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WEB208-FPOLY';
  student = {
    hoten: 'Nguyễn Văn Nam',
    gioitinh: 'Nam',
    ngaysinh: '28/12/2004',
    anh: 'poly.jpeg',
    diemTB: 8.9,
  };
}
