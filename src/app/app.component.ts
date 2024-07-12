import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SpeakerComponent } from "./components/speaker/speaker.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterLink, SpeakerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
