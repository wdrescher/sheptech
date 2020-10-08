import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sheptech';
  isLoading = true; 
  icons = [
    {
      url: "assets/cloud.svg", 
      description: "cloud",
      about: "we build using aws"
    }, 
    {
      url: "assets/layers.svg", 
      description: "full stack", 
      about: "we build front and back end"
    },
    {
      url: "assets/safebox.svg", 
      description: "security", 
      about: "ssl encription and best practices"
    },
    {
      url: "assets/share.svg", 
      description: "integration", 
      about: "build directly into your companies web presence"
    }
  ]
}
