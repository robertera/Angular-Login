import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerramentasComponent } from './pages/ferramentas/ferramentas.component';
import { AdicionarFerramentaComponent} from './components/adicionar-ferramenta/adicionar-ferramenta.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ferramentas', component: FerramentasComponent, canActivate: [AuthGuard]},
  { path: 'adicionar-ferramenta', component: AdicionarFerramentaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
