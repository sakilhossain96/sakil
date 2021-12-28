import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  alert:boolean=false;
  constructor(private route:ActivatedRoute, private student:StudentService,private router: Router) { }
  editStudent= new FormGroup({
    username:new FormControl(''),
    phone:new FormControl('')
  })

  ngOnInit(): void {
    this.student.show_one(this.route.snapshot.params['id']).subscribe((result:any)=>{
        // console.log(result);
        this.editStudent= new FormGroup({
          username:new FormControl(result.data['name']),
          phone:new FormControl(result.data['phone'])
        })
    })
  }

  updateStudent(){
    // console.log(this.editStudent.value);
    this.student.updateStudent(this.route.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
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


