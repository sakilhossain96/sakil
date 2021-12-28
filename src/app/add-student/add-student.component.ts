import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 alert:boolean=false;

  constructor( private student:StudentService,private router: Router) { }
  addStudent= new FormGroup({
    username:new FormControl(''),
    phone:new FormControl('')
  })

  ngOnInit(): void {
  }

  submitStudent(){
     this.student.submit_student(this.addStudent.value).subscribe((result)=>{
       this.alert=true;
       setTimeout(() => {
        this.router.navigate(['']);
    }, 3000);  //5s
     
     })
  }

  closeAlert(){
    this.alert=false;
  }

}
