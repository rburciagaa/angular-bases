import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public emmiter:EventEmitter<Character>=new EventEmitter<Character>()
  public character:Character={
    name:'',
    power:0
  }

  emitCharacter(){
    // if(this.character.name.length===0) return;
    console.log({"add-character":this.character});
    
    this.emmiter.emit(this.character)
    this.character.name=''
    this.character.power=0
  }
}
