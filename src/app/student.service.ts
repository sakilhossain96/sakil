import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
url_show = "http://localhost:8000/api/v1/show";
url_add = "http://localhost:8000/api/v1/add";
url_one = "http://localhost:8000/api/v1/show_one";
url_update = "http://localhost:8000/api/v1/update";
url_delete = "http://localhost:8000/api/v1/delete";
  constructor(private http:HttpClient) { }
  student_list(){
    return this.http.get(this.url_show);
  }
  submit_student(data:any){
    return this.http.post(this.url_add,data);
  }
  show_one(data:any){
    
    return this.http.get(`${this.url_one}/${data}`);
    
  }

  updateStudent(id:any,data:any){
    
    return this.http.post(`${this.url_update}/${id}`,data);
    
  }

  deleteStudent(id:any){
    
    return this.http.get(`${this.url_delete}/${id}`);
    
  }





}
