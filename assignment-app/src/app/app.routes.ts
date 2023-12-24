import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './auth/login/login.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
export const routes: Routes = [
    { path: '', component: AccueilComponent   },
    { path: 'AssignmentList', component: AssignmentsComponent },
    { path: 'Assignment/Details/:id', component: AssignmentDetailComponent, canActivate: [authGuard]},
    { path: 'Assignment/Add', component: AddAssignmentComponent ,canActivate: [authGuard] },
    { path: 'Assignment/Edit/:id', component:EditAssignmentComponent,canActivate: [authGuard]},
    { path: 'Login', component: LoginComponent },
];
