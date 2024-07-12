import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemPreviewComponent } from './menu-item-preview.component';

describe('MenuItemPreviewComponent', () => {
  let component: MenuItemPreviewComponent;
  let fixture: ComponentFixture<MenuItemPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
