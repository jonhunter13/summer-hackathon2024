import { Component, OnInit } from "@angular/core";
import events from "../../../assets/datasources/events.json";
import { PageHeaderEventsComponent } from "../../components/icons/page-header-events.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgFor } from "@angular/common";
import { ALL_MONTHS, GameEvent } from "../../interfaces/game-event.interface";

@Component({
  selector: "app-events",
  standalone: true,
  imports: [MatGridListModule, NgFor, PageHeaderEventsComponent],
  templateUrl: "./events.component.html",
  styleUrl: "./events.component.scss",
})
export class EventsComponent implements OnInit {
  events = events as GameEvent[];
  month: string | undefined;
  currentMonth = new Date().getMonth();
  constructor() {}

  ngOnInit() {
    this.month = ALL_MONTHS[this.currentMonth];
  }

  getNextMonth() {
    this.currentMonth = (this.currentMonth + 1) % 12;
  }

  getPreviousMonth() {
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;
  }
}
