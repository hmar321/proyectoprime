import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  public textCopyBtn: string;
  public textCopyIcon: string;

  constructor(public ref: DynamicDialogRef) {
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
        this.ref.close();
      }, 1000);
    });
  }
  abrirPrimeng(): void {
    window.open("https://primeng.org/installation", "_blank");
    this.ref.close();
  }
}
