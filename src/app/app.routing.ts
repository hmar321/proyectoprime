import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

var rutas: Routes = [];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);