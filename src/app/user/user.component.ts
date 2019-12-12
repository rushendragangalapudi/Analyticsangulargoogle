import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

export interface UserData {
  name: string;
  userId: number;
  city: string;
  userAccount: string;
}
const USER_DATA: UserData[] = [
  {userId: 1, name: 'Anne	Bond', city: 'Carpio', userAccount: 'bond'},
  {userId: 2, name: 'Sam Robertson', city: 'Rapid Valley', userAccount: 'sam'},
  {userId: 3, name: 'Colin North', city: 'Tekamah', userAccount: 'colin'},
  {userId: 4, name: 'Adrian	Campbell', city: 'Coldstream', userAccount: 'adrian'},
  {userId: 5, name: 'Paul	Hamilton', city: 'Paint Rock', userAccount: 'paul'},
  {userId: 6, name: 'Megan Jones', city: 'Lake Secession', userAccount: 'megan'},
  {userId: 7, name: 'Thomas	Mackay', city: 'Osage', userAccount: 'thomas'},
  {userId: 8, name: 'Michael McGrath', city: 'Indian Rocks Beach', userAccount: 'michael'},
  {userId: 9, name: 'Lucas Marshall', city: 'Burke', userAccount: 'lucas'},
  {userId: 10, name: 'Chloe	Welch', city: 'Jenkins', userAccount: 'chloe'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'name', 'city', 'userAccount'];
  dataSource = USER_DATA;
  constructor(private userService: UserService) { }
  ngOnInit() {
  }

}
