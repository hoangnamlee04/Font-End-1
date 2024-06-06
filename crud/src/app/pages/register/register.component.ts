import { Component, inject } from '@angular/core';
import { ProductService } from '../../product.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // authService = inject(AuthService);
  // addForm: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required]),
  //   username: new FormControl('', [Validators.required]),
  // });
  // handleSubmit() {
  //   this.authService.register(this.addForm.value).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     },
  //   });
  // }
}
