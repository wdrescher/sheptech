import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sheptech-navigation-buttons',
  templateUrl: './sheptech-navigation-buttons.component.html',
  styleUrls: ['./sheptech-navigation-buttons.component.scss']
})
export class SheptechNavigationButtonsComponent implements OnInit {
  @Input() isAlternate: boolean;

  constructor() { }
  items = [
    {name: "about us", link:"about"}, 
    {name: 'seperator'},
    {name: "services", link: "services"}, 
    {name: 'seperator'},
    {name: "contact us", link: "contact"}
  ]
  ngOnInit(): void {
  }

}
