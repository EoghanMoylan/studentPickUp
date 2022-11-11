import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-studentpickup',
  templateUrl: './studentpickup.component.html',
  styleUrls: ['./studentpickup.component.scss']
})

export class StudentpickupComponent implements OnInit {
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  classrooms: any=  [];
  student_details: any=  [];
  student: any=  {};
  carReg: string = "";
  studentsRemaining: any = {};

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

        this.carReg = "";
        if(this.student.isPresent == false){
          this.showToastr("warn", this.student.firstName +  " has already left the school", "Student is absent");
        }
      }
      else{
        this.showToastr("error", "If you believe this to be a mistake contact the system administrator", "No reg has been returned by DB");
      }
    });
  }

  showToastr(type : string, message : string, title : string){

    if (type==="error"){
      this.toastr.error(message, title);
    }
    if (type==="success"){
      this.toastr.success(message, title);
    }
    if (type==="warn"){
      this.toastr.warning(message, title);
    }
  }

  updateStudent(){
    this.student.isPresent = false;
    this.apiService.updateStudent(this.student).subscribe((res: any) => {
      this.showToastr("success", this.student.firstName +  " has now left the school in car : " + this.student_details.carReg, "Updated Student");
      this.updateStudentCount(this.student.classroomID);
      this.clearData();
    });
  }

  clearData(){
    this.student_details = "";
    this.student = "";
  }

  updateStudentCount(classID : any){
    this.apiService.getClassroomCount(classID).subscribe((res: any) => {
      this.studentsRemaining[classID] = res.classroom_count;
      console.log(this.studentsRemaining);
    });
  }

  resetData(){
    this.apiService.resetData().subscribe((res: any) => {
      this.showToastr("warn", "All data has now be reset to inital values.", "Reset Data");
      this.clearData();
      this.getClassroomsInit();
    });
  }
  
  getClassroomsInit(){
    this.apiService.getAllClassrooms().subscribe((res: any) => {
      this.classrooms = res.classrooms;

      this.classrooms.forEach((classroom: any) => {
        this.studentsRemaining[classroom.id] = classroom.studentCount;
      });
    });
  }
}
