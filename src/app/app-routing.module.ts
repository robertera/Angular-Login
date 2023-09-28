import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerramentasComponent } from './pages/ferramentas/ferramentas.component';
import { AdicionarFerramentaComponent} from './components/adicionar-ferramenta/adicionar-ferramenta.component';


const routes: Routes = [
  { path: 'ferramentas', component: FerramentasComponent },
  { path: 'adicionar-ferramenta', component: AdicionarFerramentaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
