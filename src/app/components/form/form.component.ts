import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public seleccionado!: SelectItem;
  public sugFiltro: Array<SelectItem>;
  public deportes: Array<SelectItem>;

  public date!: Date;

  public checkbox: boolean = false;

  public colorRGB!: any;

  public opcion!: SelectItem;

  public multiselect: SelectItem[];

  constructor(private _cdref: ChangeDetectorRef) {
    this.deportes = [
      { label: 'Futbol', value: 'Futbol' },
      { label: 'Baloncesto', value: 'Baloncesto' },
      { label: 'Tenis', value: 'Tenis' },
      { label: 'Natacion', value: 'Natacion' },
      { label: 'Ciclismo', value: 'Ciclismo' },
      { label: 'Atletismo', value: 'Atletismo' },
      { label: 'Rugby', value: 'Rugby' },
      { label: 'Voleibol', value: 'Voleibol' },
      { label: 'Hockey', value: 'Hockey' },
      { label: 'Gimnasia', value: 'Gimnasia' },
      { label: 'Waterpolo', value: 'Waterpolo' },
    ];

    this.sugFiltro = [];

    this.colorRGB = { r: 100, g: 150, b: 250 };

    this.multiselect = [];
  }
  ngOnInit(): void {
    this._cdref.detectChanges();
  }
  search(event: AutoCompleteCompleteEvent) {
    let filtrado = [];
    let busqueda = event.query.toLowerCase();
    for (let item of this.deportes) {
      let sugerencia = item.label!.toLowerCase();
      if (sugerencia.indexOf(busqueda) == 0) {
        filtrado.push(item);
      }
    }
    this.sugFiltro = filtrado;
  }
}
