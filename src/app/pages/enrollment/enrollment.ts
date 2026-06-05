import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({

  selector:'app-enrollment',

  standalone:true,

  imports:[
    CommonModule,
    FormsModule
  ],

  templateUrl:'./enrollment.html',

  styleUrl:'./enrollment.scss'
})
export class Enrollment implements OnInit{


  constructor(
private router: Router){}


ngOnInit(){

  const savedForm =
  localStorage.getItem(
    'enrollmentForm'
  );

  if(savedForm){

    this.student =
    JSON.parse(savedForm);
  }

  const savedStep =
  localStorage.getItem(
    'enrollmentStep'
  );

  if(savedStep){

    this.currentStep =
    Number(savedStep);
  }
}
enrollmentSubmitted = false;


enrollmentId = '';

  currentStep = 1;

  student = {

    fullName:'',
    dob:'',
    gender:'',
    photo:'',

    mobile:'',
    email:'',

    school:'',
    class:'',
    board:'',
    course:'',
    batchMode:'',

    fatherName:'',
    fatherOccupation:'',
    motherName:'',
    parentMobile:'',
    address:'',
    marksheet:''
  };

  validateEmail(email:string):boolean{

  const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

validatePhone(phone:string):boolean{

  const phoneRegex =
  /^[0-9]{10}$/;

  return phoneRegex.test(phone);
}
  

nextStep(){

  if(this.currentStep === 1){

    if(
      !this.student.fullName.trim()
    ){

      alert(
        'Full Name is required'
      );

      return;
    }

    if(
      this.student.fullName
      .trim()
      .length < 3
    ){

      alert(
        'Name must contain at least 3 characters'
      );

      return;
    }

    if(
      !this.validatePhone(
        this.student.mobile
      )
    ){

      alert(
        'Enter a valid 10-digit mobile number'
      );

      return;
    }

    if(
      !this.validateEmail(
        this.student.email
      )
    ){

      alert(
        'Enter a valid email address'
      );

      return;
    }

    if(
      !this.student.gender
    ){

      alert(
        'Please select gender'
      );

      return;
    }
  }

  if(this.currentStep === 2){

    if(
      !this.student.school.trim()
    ){

      alert(
        'School Name is required'
      );

      return;
    }

    if(
      !this.student.class
    ){

      alert(
        'Please enter class'
      );

      return;
    }

    if(
      !this.student.board
    ){

      alert(
        'Please select board'
      );

      return;
    }

    if(
      !this.student.course
    ){

      alert(
        'Please select course'
      );

      return;
    }

      if(
  !this.student.batchMode
){

  alert(
    'Please select batch mode'
  );

  return;
}
  }


if(this.currentStep < 3){

  this.currentStep++;

  localStorage.setItem(
    'enrollmentStep',
    this.currentStep.toString()
  );

  setTimeout(() => {

    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, 0);
}
}
  previousStep(){

   if(this.currentStep > 1){

  this.currentStep--;

  localStorage.setItem(
    'enrollmentStep',
    this.currentStep.toString()
  );

  setTimeout(() => {

    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, 0);
}
}

  copied = false;
  copyEnrollmentId(){

  navigator.clipboard.writeText(
    this.enrollmentId
  );

  this.copied = true;

  setTimeout(() => {

    this.copied = false;

  }, 2000);
}

 submitForm(){

  if(
    !this.student.fatherName.trim()
  ){

    alert(
      "Father's Name is required"
    );

    return;
  }

  if(
  !this.student.fatherOccupation.trim()
){

  alert(
    "Father's Occupation is required"
  );

  return;
}

  if(
    !this.validatePhone(
      this.student.parentMobile
    )
  ){

    alert(
      "Enter a valid parent mobile number"
    );

    return;
  }
  if(
  !this.student.address.trim()
){

  alert(
    'Address is required'
  );

  return;
}

  this.enrollmentId =
  'ENR-' +
  new Date().getFullYear() +
  '-' +
  Math.floor(
    1000 + Math.random() * 9000
  );

  this.enrollmentSubmitted = true;

  localStorage.removeItem(
    'enrollmentForm'
  );

  localStorage.removeItem(
    'enrollmentStep'
  );
}

goToLogin(){

  this.router.navigate(['/login']);
}

openDatePicker(input:any){

  if(input.showPicker){

    input.showPicker();
  }
}

saveFormData(){

  localStorage.setItem(
    'enrollmentForm',
    JSON.stringify(this.student)
  );

  localStorage.setItem(
    'enrollmentStep',
    this.currentStep.toString()
  );
}
}