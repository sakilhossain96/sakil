import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  alert:boolean=false;
all_student:any=[];
  constructor(private student:StudentService) { }

  ngOnInit(): void {
    this.student.student_list().subscribe((result:any)=>{
         this.all_student= result.data;
        // console.log(result.data)
    })
  }

  deleteStudent(id:any){
    // console.log(id);
    this.student.deleteStudent(id).subscribe((result)=>{
        this.ngOnInit();
        this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
