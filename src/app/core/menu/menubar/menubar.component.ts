import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  menus: Menu[] = [
    new Menu("PRS", "/home"),
    new Menu("Users", "/users/list"),
    new Menu("Vendors", "/vendors/list"),
    new Menu("Products", "/products/list"),
    new Menu("Requests", "/requests/list"),
    new Menu("Reviews", "/requests/reviews"),
    new Menu("About", "/about"),
    new Menu("Login", "/login"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
