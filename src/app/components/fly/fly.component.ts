import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.scss'],

})
export class FlyComponent implements OnInit {
  

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  openCity(evt: any, cityName: string) {
    const tabcontent = document.querySelectorAll('.tabcontent')
    console.log(tabcontent);
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("display");
      tabcontent[i].classList.add("display-none");
    }
  
    const tablinks = document.querySelectorAll('.tablinks')
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    console.log(cityName);
    let e = document.querySelector(cityName);
    e && e.classList.add("display");
    evt.currentTarget.className += " active";
  }
    passsenger(evt: any) {
      var passsengerContainer = document.querySelectorAll('.passsenger-container');
      passsengerContainer[0].classList.add("active");
    }
  }

