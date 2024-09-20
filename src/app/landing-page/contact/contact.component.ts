import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isChecked: boolean = false;
  http = inject(HttpClient);
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  mailTest = false;
  isSubmittet = false;


  post = {
    endPoint: 'https://alexanderlangenbeck.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
isSubmitted: any;

  onSubmit(ngForm: NgForm) {
    this.isSubmitted = true;

    setTimeout(()=>{
      this.isSubmitted = false;
    },5000)

    if (ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  checked() {
    this.isChecked = !this.isChecked;
  }
}
