import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SharedModule } from './shared.module'; // Ajusta la ruta según tu estructura de archivos

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterLink, SharedModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}