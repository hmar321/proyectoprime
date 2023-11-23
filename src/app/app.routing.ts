import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { FormComponent } from "./components/form/form.component";
import { OverlayComponent } from "./components/overlay/overlay.component";
import { PanelComponent } from "./components/panel/panel.component";
import { DataComponent } from "./components/data/data.component";

var rutas: Routes = [
    { path: "", component: HomeComponent },
    { path: "form", component: FormComponent },
    { path: "overlay", component: OverlayComponent },
    { path: "panel", component: PanelComponent },
    { path: "data", component: DataComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);