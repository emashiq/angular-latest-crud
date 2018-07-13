import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl  } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  studentForm:FormGroup;
  isSubmitted:boolean;
  constructor(private fb:FormBuilder) { 
    this.studentForm = this.fb.group({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      age:new FormControl(''),
      passingyear:new FormControl(''),
      image:new FormControl(),
      file:new FormControl
    });
    this.isSubmitted =false;
  }
  ngOnInit() {
  }
  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.studentForm.patchValue({
          file: reader.result
       });
      };
    }
  }
  onSubmit(){
    console.log(this.studentForm.value);
    this.isSubmitted =  true;
  }
}
