import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { CardModule } from 'primeng/card';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user-card',
  imports: [CardModule, NgFor],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],

  standalone: true
})
export class UserCardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.map(user => ({
        ...user,
        profilePicture: `https://i.pravatar.cc/150?img=${user.id}` // Generate profile picture URL
      }));
    });
  }
}
