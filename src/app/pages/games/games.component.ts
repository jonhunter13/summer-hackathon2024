import { Component, OnInit, ViewChild } from "@angular/core";
import games from "../../../assets/datasources/board_games.json";
import { PageHeaderGamesComponent } from "../../components/icons/page-header-games.component";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { BoardGame } from "../../interfaces/board-game.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-games",
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, PageHeaderGamesComponent],
  templateUrl: "./games.component.html",
  styleUrl: "./games.component.scss",
})
export class GamesComponent implements OnInit {
  displayedColumns: string[] = [
    "title",
    "publisher",
    "year_published",
    "number_of_players",
    "playtime",
    "age_range",
    "rating_average_score",
    "rules_link",
  ];
  dataSource!: MatTableDataSource<BoardGame>;
  constructor(public router: Router) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<BoardGame>(games as BoardGame[]);
    this.dataSource.paginator = this.paginator;
  }

  navigateToGame(game: BoardGame) {
    this.router.navigate(["game-details/", game.title]);
  }
}
