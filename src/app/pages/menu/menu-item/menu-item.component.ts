import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
export class MenuItemComponent implements OnInit {
  @Output() menuSelectEvent = new EventEmitter<MenuItem>();
  @Input() menuItem!: MenuItem;

  ngOnInit(): void {
    if(this.menuItem.selected) {
      console.log(this.menuItem)
    }
  }
  emitMenuItemSelection() {
    this.menuSelectEvent.emit(this.menuItem);
  }
}
