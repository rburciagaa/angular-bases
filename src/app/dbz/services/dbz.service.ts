import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    public characters:Character[]=[
        {
            id:uuid(),
            name:'Krillin', 
            power:1000
        },
        {id:uuid(),name:'Goku', power:9500},
        {id:uuid(), name:'Vegeta', power:7500}
    ];

    read(event:Character){
        if(event.name.length===0)return;
        const newCharacter:Character={
            ...event,
            id:uuid()
        }
        this.characters.push(newCharacter);
    }

    // deleteCharacter(index:number):void{
    //     this.characters.splice(index,1);       
    // }

    deleteCharacterById(id:string):void{
        this.characters=this.characters.filter(x=>x.id!==id);
    }
}