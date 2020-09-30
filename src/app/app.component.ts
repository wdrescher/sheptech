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
      description: "cloud"
    }, 
    {
      url: "assets/layers.svg", 
      description: "full stack"
    },
    {
      url: "assets/safebox.svg", 
      description: "security"
    },
    {
      url: "assets/share.svg", 
      description: "integration"
    }
  ]
}
