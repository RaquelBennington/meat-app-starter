import { Routes } from "@angular/router";
import { HomeComponent } from "app/components/home/home.component";
import { AboutComponent } from "./about.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent}, // aqui estamos direcionado o path vazio sempre para a Home
    {path: 'about', component: AboutComponent}
]


