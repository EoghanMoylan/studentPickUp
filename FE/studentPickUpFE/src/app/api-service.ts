import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://127.0.0.1:3000';

  getStudentByCarReg(carReg : string) {
    return this.http.get(this.rootURL + '/students/'+carReg);
  }
  getClassroomCount(id : number){
    return this.http.get(this.rootURL + '/students/studentcount/'+ id);
  }
  updateStudent(student : any) {
    return this.http.patch(this.rootURL + '/students/', student);
  }
  getAllClassrooms() {
    return this.http.get(this.rootURL + '/classrooms/');
  }
  resetData() {
    return this.http.patch(this.rootURL + '/reset/', null);
  }
}