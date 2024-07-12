import { Component } from "@angular/core";
import { ArrowBoxIconComponent } from "../../components/icons/arrow-box-icon.component";
import { GithubIconComponent } from "../../components/icons/github-icon.component";
import { TwitterIconComponent } from "../../components/icons/twitter-icon.component";
import { YouTubeIconComponent } from "../../components/icons/youtube-icon.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";

const icons = [ArrowBoxIconComponent, GithubIconComponent, TwitterIconComponent, YouTubeIconComponent];

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatGridListModule, MatCardModule, HeaderComponent, ...icons],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  host: {
    class: "content",
  },
})
export class HomeComponent {}
