import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sheptech-contact-form',
  templateUrl: './sheptech-contact-form.component.html',
  styleUrls: ['./sheptech-contact-form.component.scss']
})
export class SheptechContactFormComponent implements OnInit {
  formGroup: FormGroup; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    }) 
  }
}