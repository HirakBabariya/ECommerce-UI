import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { authGuard } from './_auth/auth.guard';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'admin', component: AdminComponent, canActivate:[authGuard], data:{roles : ['Admin']}},
    {path:'user', component: UserComponent, canActivate:[authGuard], data:{roles : ['User']}},
    {path:'forbidden', component: ForbiddenComponent},
    {path:'login', component: LoginComponent}
];
