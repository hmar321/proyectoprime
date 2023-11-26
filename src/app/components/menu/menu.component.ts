import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  items: MenuItem[];
  activeItem!: MenuItem;
  constructor(private _router: Router,private _message:MessageService) {
    this.items = [
      { label: 'PrimeNG', icon: 'pi pi-fw pi-prime', routerLink: "" },
      { label: 'Form', icon: 'pi pi-fw pi-file-edit', routerLink: "form" },
      { label: 'Overlay', icon: 'pi pi-fw pi-comment', routerLink: "overlay" },
      { label: 'Data', icon: 'pi pi-fw pi-database', routerLink: "data" },
    ];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    this._router.navigate([this.activeItem.routerLink]);
  }
}
