import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NgFor } from "@angular/common";

import items from "../../../assets/datasources/menu-items.json";
import { MenuItem, Category } from "../../interfaces/menu-item.interface";
import { MatGridListModule } from "@angular/material/grid-list";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { PageHeaderMenuComponent } from "../../components/icons/page-header-menu.component";
import { MatDividerModule } from "@angular/material/divider";
import { MenuItemPreviewComponent } from "./menu-item-preview/menu-item-preview.component";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [
    MatGridListModule,
    MatDividerModule,
    MenuItemComponent,
    MenuItemPreviewComponent,
    NgFor,
    PageHeaderMenuComponent,
  ],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  items = items;
  selectedMenuItem: MenuItem = items[0];
  selectedMenuItem2: MenuItem = items.find((item: MenuItem) => item.threeJsFile === 'chicken_poppers.glb')!;

  ngOnInit(): void {
    this.items = items.map((item: MenuItem) => ({ ...item, selected: false }));
  }

  getMenuItems(category: Category): MenuItem[] {
    return this.items.filter((item: MenuItem) => item.category === category);
  }
}
