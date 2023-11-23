import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  items: MenuItem[];
  activeItem!: MenuItem;
  constructor(private _router: Router) {
    this.items = [
      { label: 'PrimeNG', icon: 'pi pi-fw pi-prime', routerLink: "" },
      { label: 'Form', icon: 'pi pi-fw pi-file-edit', routerLink: "form" },
      { label: 'Overlay', icon: 'pi pi-fw pi-comment', routerLink: "overlay" },
      { label: 'Panel', icon: 'pi pi-fw pi-table', routerLink: "panel" },
      { label: 'Data', icon: 'pi pi-fw pi-database', routerLink: "data" },
    ];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    this._router.navigate([this.activeItem.routerLink]);
  }
}
