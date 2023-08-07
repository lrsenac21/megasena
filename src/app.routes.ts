import { Routes } from "@angular/router";
import { MainComponent } from "./app/home/main.component";
import { SobreComponent } from "./app/sobre/sobre.component";
import { SorteioComponent } from "./app/sorteio/sorteio.component";



export const ROUTE: Routes = [
    {path: '', component: MainComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'sorteio', component: SorteioComponent}

];