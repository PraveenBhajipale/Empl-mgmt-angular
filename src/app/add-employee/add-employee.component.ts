import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel, matFormFieldAnimations } from '@angular/material/form-field';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [MatFormField, MatLabel, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(public dialog: MatDialogRef<AddEmployeeComponent>,) { }

  ngOnInit(): void {
    this.loadFormControls()
  }


  loadFormControls() {
    this.reactiveForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ]),
      position: new FormControl("", [Validators.required]),
      salary: new FormControl("", [Validators.required]),
    });
  }

  cancel() {
    console.log("close")
    this.dialog.close()
  }
  onSubmit() {
    console.log(this.reactiveForm.value)
    this.dialog.close(this.reactiveForm.value);
  }
}


