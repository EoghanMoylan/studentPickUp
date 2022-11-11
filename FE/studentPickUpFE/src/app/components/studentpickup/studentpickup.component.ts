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

    this.apiService.getStudentByCarReg(this.carReg).subscribe((res: any) => {
      if(res.student_details != undefined){
        this.student_details = res.student_details;
        this.student = this.student_details.student;
        this.carReg = "";
      }
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
