import {Component} from '@angular/core';

@Component({
    selector: 'sg-data-component',
    templateUrl: './templates/data.component.html',
    styleUrls:['./styles/data.component.css']
})
export class DataComponent {

    public filters:Array<any>=[
        {id:"temp",name:"Температура"},
        {id:"humidity",name:"Влажност"},
        {id:"ph",name:"pH"},
        {id:"sun",name:"Осветеност"},
        {id:"irrigation",name:"Поливане"}
    ]

}