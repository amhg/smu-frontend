import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  profileForm: FormGroup;

  // Constructor to initialize FormBuilder
  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      favoriteBooks: this.formBuilder.array([this.formBuilder.control('')])
    });
  }

  // Getter method to access FormArray
  get favoriteBooks() {
    return this.profileForm.get('favoriteBooks') as FormArray;
  }

  // Method to add a new book control dynamically
  addBook() {
    this.favoriteBooks.push(this.formBuilder.control(''));
  }

  removeBook(index: number) {
    this.favoriteBooks.removeAt(index)
  }

  // Method to submit form data
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
