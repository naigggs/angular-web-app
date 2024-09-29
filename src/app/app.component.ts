import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FeedCardComponent } from "./components/feed-card/feed-card.component";
import { RecomendationCardComponent } from "./components/recomendation-card/recomendation-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, NavbarComponent, FeedCardComponent, RecomendationCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WebApp';
}
