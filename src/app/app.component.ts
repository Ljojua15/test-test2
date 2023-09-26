import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positions = [
    {position: "ჩემი პოზიცია", point: 100},
    {position: "ჩემი ქულა", point: 100},
    {position: "ჩემი პრიზი", point: 100}
  ]
}
