import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    public characters:Character[]=[
        {name:'Krillin', power:1000},
        {name:'Goku', power:9500},
        {name:'Vegeta', power:7500}
    ];

    read(event:Character){
        if(event.name.length===0)return;
        this.characters.push({name:event.name, power:event.power})
    }

    deleteCharacter(index:number):void{
        this.characters.splice(index,1)
        
    }
}