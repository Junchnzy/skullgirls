import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'skullgirls';
}
