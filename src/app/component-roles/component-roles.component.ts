import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-roles',
  templateUrl: './component-roles.component.html',
  styleUrls: ['./component-roles.component.css']
})
export class ComponentRolesComponent implements OnInit {

  name: string = "simon";
  time: string = "Good Morning";

  constructor() { }

  ngOnInit(): void {
  }

}
