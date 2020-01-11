import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  user = '';
  changeTitle() {
    this.title = 'ahihi';
  }

  resetTitle() {
    this.title = 'my-app';
  }
}
