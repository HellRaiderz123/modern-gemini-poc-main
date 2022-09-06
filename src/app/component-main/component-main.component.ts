import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-component-main',
  templateUrl: './component-main.component.html',
  styleUrls: ['./component-main.component.css']
})
export class ComponentMainComponent implements OnInit {
  

  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }

}
