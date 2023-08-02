import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList:Character[]=[]
  @Output()
  onDeleteIndex:EventEmitter<number>=new EventEmitter()


  onDeleteCharacter(index:number):void{
    this.onDeleteIndex.emit(index);    
  }
}
