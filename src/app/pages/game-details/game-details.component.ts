import { Component } from "@angular/core";
import games from "../../../assets/datasources/board_games.json";
import { BoardGame } from "../../interfaces/board-game.interface";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-game-details",
  standalone: true,
  imports: [MatGridListModule, RouterLink],
  templateUrl: "./game-details.component.html",
  styleUrl: "./game-details.component.scss",
})
export class GameDetailsComponent {
  constructor(private route: ActivatedRoute) {}

  games: BoardGame[] = games as BoardGame[];
  game: BoardGame | undefined;

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("title"));
    this.game = this.games.find((game: BoardGame) => game.title == this.route.snapshot.paramMap.get("title"));
  }
}
