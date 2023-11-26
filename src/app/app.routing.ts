import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataComponent } from "./components/data/data.component";
import { FormComponent } from "./components/form/form.component";
import { HomeComponent } from "./components/home/home.component";
import { OverlayComponent } from "./components/overlay/overlay.component";

var rutas: Routes = [
    { path: "", component: HomeComponent },
    { path: "form", component: FormComponent },
    { path: "overlay", component: OverlayComponent },
    { path: "data", component: DataComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);