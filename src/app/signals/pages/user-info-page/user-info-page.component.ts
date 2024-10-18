import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private userSrv = inject(UserService);

  public userId = signal<number>(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal<boolean>(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }


  loadUser(id: number): void {
    if(id === 0) { return; }

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.userSrv.getUserById(id)
      .subscribe(user => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      });
  }

}
