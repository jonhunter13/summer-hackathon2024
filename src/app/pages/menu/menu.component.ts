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
  items = items as MenuItem[];
  selectedMenuItem: MenuItem = items[0];
  selectedMenuItem2: MenuItem = items.find((item: MenuItem) => item.threeJsFile === "chicken_poppers.glb")!;

  ngOnInit(): void {
    this.selectDefaultRenderedMenuItems();
  }

  getMenuItems(category: Category): MenuItem[] {
    return this.items.filter((item: MenuItem) => item.category === category);
  }

  handleMenuItemSelect(selectedMenuItem: MenuItem) {
    const menuItemIdx = this.items.findIndex((item: MenuItem) => item.title === this.selectedMenuItem.title);
    this.items[menuItemIdx] = { ...this.selectedMenuItem, selected: false };

    const newMenuItemStateIdx = this.items.findIndex((item: MenuItem) => item.title === selectedMenuItem.title);
    this.items[newMenuItemStateIdx] = { ...selectedMenuItem, selected: true };
    this.selectedMenuItem = this.items[newMenuItemStateIdx];
  }

  handleMenuItemSelect2(selectedMenuItem: MenuItem) {
    const menuItemIdx = this.items.findIndex((item: MenuItem) => item.title === this.selectedMenuItem2.title);
    this.items[menuItemIdx] = { ...this.selectedMenuItem2, selected: false };

    const newMenuItemStateIdx = this.items.findIndex((item: MenuItem) => item.title === selectedMenuItem.title);
    this.items[newMenuItemStateIdx] = { ...selectedMenuItem, selected: true };
    this.selectedMenuItem2 = this.items[newMenuItemStateIdx];
  }

  selectDefaultRenderedMenuItems() {
    this.handleMenuItemSelect(this.selectedMenuItem);
    this.handleMenuItemSelect2(this.selectedMenuItem2);
  }
}
