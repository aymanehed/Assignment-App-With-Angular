import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

import { AssignmentsService } from '../shared/assignments.service';

import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule ,Router} from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,RouterModule,RenduDirective, MatListModule, MatDividerModule, AssignmentDetailComponent, AddAssignmentComponent, MatButtonModule ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit{
  titre : String = 'Les Assignments aymane';
  formVisible : boolean = false;
  assignmentSelectionne !: Assignment;
  assignments !: Assignment[] ;

  constructor( private assignmentsService: AssignmentsService,private router:Router,private authService:AuthService) { }

  ngOnInit() {
    //this.assignments = this.assignmentsService.getAssignments();
    this.getAssignments()
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
      .subscribe(
        a => this.assignments = a
      );
  }
  isAdminLoggedIn(): boolean{
    return this.authService.isLogged() && this.authService.isAdmin();
  }
  isLoggedIn(): boolean{
    return this.authService.isLogged();
  }
  onAddAssignment() {
    this.formVisible = true;
    
  }

  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom );
    this.assignmentSelectionne = assignment;
    this.router.navigate(['Assignment/Details/'+assignment.id])

  }

  onNouvelAssignment(assignment: Assignment) {
    this.assignmentsService.addAssignment(assignment).
      subscribe(
        message => {
          console.log(message);
        }
      );
    this.formVisible = false;
  }
}
