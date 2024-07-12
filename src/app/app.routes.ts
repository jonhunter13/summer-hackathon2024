import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "menu",
    loadComponent: () => import("./pages/menu/menu.component").then((c) => c.MenuComponent),
  },
  {
    path: "events",
    loadComponent: () => import("./pages/events/events.component").then((c) => c.EventsComponent),
  },
  {
    path: "games",
    loadComponent: () => import("./pages/games/games.component").then((c) => c.GamesComponent),
  },
  {
    path: "reservations",
    loadComponent: () => import("./pages/reservations/reservations.component").then((c) => c.ReservationsComponent),
  },
  {
    path: "**",
    loadComponent: () => import("./pages/not-found/not-found.component").then((c) => c.NotFoundComponent),
  },
];
