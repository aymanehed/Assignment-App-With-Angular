import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import {Router,ActivatedRoute} from '@angular/router'
import { EditAssignmentComponent } from '../edit-assignment/edit-assignment.component';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatButtonModule,EditAssignmentComponent],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
 assignmentTransmis !: Assignment;
 assignments !: Assignment[] ;
  constructor(private assignmentsService: AssignmentsService,private router:Router,private route:ActivatedRoute,private authService:AuthService) { }
ngOnInit(){
  this.getAssignment();
}
  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.
      updateAssignment(this.assignmentTransmis)
        .subscribe(
          message => {
            console.log(message);
            this.router.navigate(['/AssignmentList'])
          }
        );
  }

  onAssignmentSupprime() {
    this.assignmentsService.
      deleteAssignment(this.assignmentTransmis)
        .subscribe(
          message => {
            console.log(message);
            this.assignmentTransmis = null;
           this.router.navigate(['/AssignmentList'])
          }
        );
         
  }
  onAssignmentEdit(assignment:Assignment) {
  this.router.navigate(['/Assignment/Edit',assignment.id])
         
  }
getAssignment(){
  const id:number=+this.route.snapshot.params['id']
  this.assignmentsService
  .getAssignment(id)
  .subscribe((a)=>(this.assignmentTransmis = a));
}
isAdminLoggedIn(): boolean{
  return this.authService.isLogged() && this.authService.isAdmin() ;
}
isLoggedIn(): boolean{
  return this.authService.isLogged() ;
}
}
