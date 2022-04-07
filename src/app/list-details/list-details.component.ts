import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
@Input() todo!:ToDo
@Output() isComplete = new EventEmitter<boolean>();

taskComplete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit(): void {
  }

}
