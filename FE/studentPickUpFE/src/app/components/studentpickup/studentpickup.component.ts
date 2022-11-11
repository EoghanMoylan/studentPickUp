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

  ngOnInit(): void {
    this.apiService.getAllClassrooms().subscribe(res => {
      console.log(res);
  });
  }
}
