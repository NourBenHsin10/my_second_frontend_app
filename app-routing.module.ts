import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent as UserIndexComponent } from './user/index/index.component';
import { CreateComponent as UserCreateComponent } from './user/create/create.component';
import { EditComponent as UserEditComponent } from './user/edit/edit.component';
import { ViewComponent as UserViewComponent } from './user/view/view.component';
/*import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
*/
import { IndexComponent as ApprovalIndexComponent } from './approval/index/index.component';
import { CreateComponent as ApprovalCreateComponent } from './approval/create/create.component';
import { EditComponent as ApprovalEditComponent } from './approval/edit/edit.component';
import { ViewComponent as ApprovalViewComponent } from './approval/view/view.component';

import { IndexComponent as NiveauIndexComponent } from './niveau/index/index.component';
import { CreateComponent as NiveauCreateComponent } from './niveau/create/create.component';
import { EditComponent as NiveauEditComponent } from './niveau/edit/edit.component';
import { ViewComponent as NiveauViewComponent } from './niveau/view/view.component';

import { IndexComponent as EtatIndexComponent } from './etat/index/index.component';
import { CreateComponent as EtatCreateComponent } from './etat/create/create.component';
import { EditComponent as EtatEditComponent } from './etat/edit/edit.component';
import { ViewComponent as EtatViewComponent } from './etat/view/view.component';


const routes: Routes = [

 /* { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
*/
  { path: '', redirectTo: 'user/index', pathMatch: 'full' },
  { path: 'user', redirectTo: 'user/index', pathMatch: 'full'},
  { path: 'user/index', component: UserIndexComponent },
  { path: 'user/:userId/view', component: UserViewComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/:userId/edit', component: UserEditComponent },

  { path: 'approvals', redirectTo: 'approvals/index', pathMatch: 'full'},
  { path: 'approvals/index', component: ApprovalIndexComponent },
  { path: 'approvals/:approvalId/view', component: ApprovalViewComponent },
  { path: 'approvals/create', component: ApprovalCreateComponent },
  { path: 'approvals/:approvalId/edit', component: ApprovalEditComponent },

  { path: 'niveaux', redirectTo: 'niveaux/index', pathMatch: 'full'},
  { path: 'niveaux/index', component: NiveauIndexComponent },
  { path: 'niveaux/:niveauId/view', component: NiveauViewComponent },
  { path: 'niveaux/create', component: NiveauCreateComponent },
  { path: 'niveaux/:niveauId/edit', component: NiveauEditComponent },

  { path: 'etats', redirectTo: 'etats/index', pathMatch: 'full'},
  { path: 'etats/index', component: EtatIndexComponent },
  { path: 'etats/:etatId/view', component: EtatViewComponent },
  { path: 'etats/create', component: EtatCreateComponent },
  { path: 'etats/:etatId/edit', component: EtatEditComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
