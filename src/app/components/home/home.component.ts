import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public textCopyBtn: string;
  public textCopyIcon: string;

  constructor() {
    this.textCopyBtn = "npm i primeng";
    this.textCopyIcon = "pi pi-copy";
  }



  copiarNpm(): void {
    navigator.clipboard.writeText("npm i primeng").then(() => {
      this.textCopyBtn = "copiado!";
      this.textCopyIcon = "pi pi-check";
      setTimeout(() => {
        this.textCopyBtn = "npm i primeng";
        this.textCopyIcon = "pi pi-copy";
      }, 1000)
    });
  }
  abrirPrimeng(): void {
    window.open("https://primeng.org/installation", "_blank");
  }
}
