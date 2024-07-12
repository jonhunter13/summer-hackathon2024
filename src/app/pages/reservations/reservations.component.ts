import { Component } from "@angular/core";
import { PageHeaderReservationsComponent } from "../../components/icons/page-header-reservations.component";

@Component({
  selector: "app-reservations",
  standalone: true,
  imports: [PageHeaderReservationsComponent],
  templateUrl: "./reservations.component.html",
  styleUrl: "./reservations.component.scss",
})
export class ReservationsComponent {}
