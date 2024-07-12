import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MenuItem } from "../../../interfaces/menu-item.interface";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-menu-item",
  standalone: true,
  imports: [MatGridListModule, NgIf],
  templateUrl: "./menu-item.component.html",
  styleUrl: "./menu-item.component.scss",
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
  @Output() menuSelectEvent = new EventEmitter<MenuItem>();

  emitMenuItemSelection() {
    this.menuSelectEvent.emit(this.menuItem);
  }
}
