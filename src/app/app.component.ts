import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs = [];
  showImage = true;
  imageWidth = 50;
  title = 'app works!';
  activateButton = false;

  submitDocData() {
    this.logs.push("Button clicked at " + new Date());
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }

  submitName(event: Event) {
    console.log(event);
    if ((<HTMLInputElement>event.target).value !== '') {
      this.activateButton = true;
    } else {
      this.activateButton = false;
    }
  }

  clearLogs() {
    this.logs = [];
  }
}
