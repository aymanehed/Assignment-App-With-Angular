// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sidebarState = new BehaviorSubject<boolean>(false);

  getSidebarState() {
    return this.sidebarState.asObservable();
  }

  toggleSidebarState() {
    this.sidebarState.next(!this.sidebarState.value);
  }
}
