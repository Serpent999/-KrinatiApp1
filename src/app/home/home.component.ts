import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  particlesOptions = {
    particles: {
      color: {
        value: ['#00FFFF', '#00FFFF']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  qualifications : any[] = [];
  constructor(private apiservice: ApiService) {}
  ngOnInit() {
    this.apiservice.getQualificationService().subscribe((data: any)=>{
      console.log(data);
      this.qualifications = data;
    })
  }

  title = 'krinati_app1';
}
