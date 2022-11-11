import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-studentpickup',
  templateUrl: './studentpickup.component.html',
  styleUrls: ['./studentpickup.component.scss']
})

export class StudentpickupComponent implements OnInit {
  constructor(private apiService: ApiService) {
   }

  classrooms: any=  [];
  student_details: any=  [];
  student: any=  {};
  carReg: string = "";

  ngOnInit(): void {
    this.getClassroomsInit();
  }
  getStudent(){
    this.clearData();

    //to stop accidentally adding space when entering data
    this.carReg = this.carReg.trim();

    this.apiService.getStudentByCarReg(this.carReg).subscribe((res: any) => {
      if(res.student_details != undefined){
        this.student_details = res.student_details;
        this.student = this.student_details.student;

        console.log(typeof this.student.isPresent);
        console.log(this.student.isPresent);

        this.carReg = "";
      }
    });
  }

  updateStudent(){
    this.student.isPresent = false;
    this.apiService.updateStudent(this.student).subscribe((res: any) => {
      this.clearData();
      console.log(res);
    });
  }

  clearData(){
    this.student_details = "";
    this.student = "";
  }

  resetData(){
    this.apiService.resetData().subscribe((res: any) => {
      this.clearData();
    });
  }
  
  getClassroomsInit(){
    this.apiService.getAllClassrooms().subscribe((res: any) => {
      this.classrooms = res.classrooms;
    });
  }
}
