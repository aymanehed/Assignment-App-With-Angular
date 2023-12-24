import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
//import { Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import{RouterModule} from '@angular/router';
import { AssignmentsService } from '../../shared/assignments.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,RouterModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
   id: number = +this.route.snapshot.params['id'];
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();
  nomDevoir : String = '';
  dateDeRendu : Date = new Date();
 static idC:number=5
  
  constructor(private assignmentsService: AssignmentsService, private router: Router, private route: ActivatedRoute) { }
  onSubmit() {
    const newAssigment : Assignment = new Assignment();
    newAssigment.id=AddAssignmentComponent.idC;
    newAssigment.nom = this.nomDevoir;
    newAssigment.dateDeRendu = this.dateDeRendu;
    newAssigment.rendu = false;
    //this.assignments.push(newAssigment);
    this.assignmentsService.addAssignment(newAssigment).subscribe(()=> {this.router.navigate(['list'])});
    AddAssignmentComponent.idC++
    this.router.navigate(['/AssignmentList'])
  }
}