import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SheptechContactService } from '../sheptech-contact.service';

@Component({
  selector: 'sheptech-contact-form',
  templateUrl: './sheptech-contact-form.component.html',
  styleUrls: ['./sheptech-contact-form.component.scss']
})
export class SheptechContactFormComponent implements OnInit {
  formGroup: FormGroup; 
  success = false; 
  isLoading  = false; 
  constructor(
    private formBuilder: FormBuilder, 
    private sheptechContactService: SheptechContactService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    }) 
  }

  sendContactEmail(input): void {
    if (input.comment && !this.isLoading && !this.success) {
      this.isLoading = true; 
      this.sheptechContactService.sendContactEmail(input).subscribe(
        (response) => {
          this.success = true, 
          this.isLoading = false; 
        }, 
        (error) => {}
      ); 
    }
  }
}