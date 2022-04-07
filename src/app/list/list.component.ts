import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myToDoList:ToDo[]=[
    new ToDo('Wake up','wake up and plan the days Tasks'),
    new ToDo('BreakFast','Take  my Breakfast'),
    new ToDo('Morning StandUp','Attend the morning StandUp Class'),
    new ToDo('LMS Learning','Go through the days content on the LMS'),
    new ToDo('Lunch','Take a lunch Break'),
    new ToDo('LMS Learning','Go through the days content on the LMS'),
    new ToDo('Evening StandUp','Attend Evening StandUp')
  ]
  showitem(index:any){
    this.myToDoList[index].showDescription = !this.myToDoList[index].showDescription;
  }
  taskcomplete(isComplete:any, index:any){
    if (isComplete) {
      this.myToDoList.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
