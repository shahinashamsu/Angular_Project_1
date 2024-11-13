import { Component } from '@angular/core';
import { DataService } from '../../config/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any;
  constructor(private dataservice: DataService){}

  
  ngOnInit(): void {
    this.fetchStudent(2); 
  }

  fetchStudent(id: number): void {
    this.dataservice.getApi(id).subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching student:', error);
      }
    );
  }
}
