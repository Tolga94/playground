import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground';
  hero: Hero = {
    saves: 1,
    name: 'Windstorm'
  };
}

export class Hero {
  name: string;
  saves: number;
}
