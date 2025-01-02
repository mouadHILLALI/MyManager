import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './features/home/home.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'MyManager';
}
