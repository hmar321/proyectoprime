import { Component } from '@angular/core';
import { Table } from 'primeng/table';
interface Coche {
  marca: string;
  modelo: string;
  anyo: number;
  color: string;
  aceleracion: number;
  stock: boolean;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public coches: Array<Coche> = [
    { marca: "Toyota", modelo: "Rav4", anyo: 2023, color: "gris perla", aceleracion: 7.9, stock: true },
    { marca: "Honda", modelo: "Civic", anyo: 2021, color: "rojo", aceleracion: 9.0, stock: false },
    { marca: "Ford", modelo: "Mustang", anyo: 2023, color: "negro", aceleracion: 6.8, stock: false },
    { marca: "Chevrolet", modelo: "Camaro", anyo: 2022, color: "amarillo", aceleracion: 7.2, stock: true },
    { marca: "Volkswagen", modelo: "Golf", anyo: 2021, color: "verde", aceleracion: 8.0, stock: false },
    { marca: "Volkswagen", modelo: "Tiguan", anyo: 2022, color: "plata", aceleracion: 8.3, stock: false },
    { marca: "Tesla", modelo: "Model S", anyo: 2023, color: "plateado", aceleracion: 2.4, stock: true },
    { marca: "BMW", modelo: "X5", anyo: 2022, color: "blanco", aceleracion: 6.5, stock: false },
    { marca: "BMW", modelo: "3 Series", anyo: 2023, color: "azul eléctrico", aceleracion: 7.1, stock: true },
    { marca: "Mercedes-Benz", modelo: "C-Class", anyo: 2023, color: "gris", aceleracion: 7.8, stock: false },
    { marca: "Mercedes-Benz", modelo: "GLE", anyo: 2022, color: "negro metálico", aceleracion: 6.3, stock: false },
    { marca: "Audi", modelo: "A4", anyo: 2021, color: "azul marino", aceleracion: 7.0, stock: true },
    { marca: "Audi", modelo: "Q5", anyo: 2023, color: "blanco perla", aceleracion: 6.9, stock: false },
    { marca: "Lamborghini", modelo: "Huracan", anyo: 2023, color: "naranja", aceleracion: 2.9, stock: false },
    { marca: "Lamborghini", modelo: "Urus", anyo: 2022, color: "amarillo brillante", aceleracion: 3.6, stock: true },
    { marca: "Toyota", modelo: "Camry", anyo: 2022, color: "plata", aceleracion: 7.5, stock: false },
    { marca: "Ford", modelo: "Explorer", anyo: 2021, color: "rojo intenso", aceleracion: 6.7, stock: false },
    { marca: "Volkswagen", modelo: "Jetta", anyo: 2023, color: "negro", aceleracion: 8.2, stock: true },
    { marca: "Tesla", modelo: "Model 3", anyo: 2021, color: "azul metálico", aceleracion: 3.1, stock: false },
    { marca: "Audi", modelo: "A6", anyo: 2022, color: "gris perla", aceleracion: 6.6, stock: true },
  ];

  statuses!: any[];

  loading: boolean = true;

  clear(table: Table) {
    table.clear();
  }
}
