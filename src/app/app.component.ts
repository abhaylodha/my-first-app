import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Hello world!';
  assignments = ['app-assignment-component1',
    'app-assignment-component2'];

}
