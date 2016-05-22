import {Component,Output,EventEmitter,OnInit} from 'angular2/core';

@Component({
    selector: "sg-select-type",
    template: `
        <select #sel (change)="select.emit($event.target.value)" class="form-control search_plant sel-plant block-display filter-width">
             <option *ngFor="let type of types" value="{{type.value}}">{{type.name}}</option>
        </select>
    `,
    styleUrls: ['./styles/shop.component.css']
})
export class SelectTypeDirective implements OnInit{

    @Output() select = new EventEmitter();

    public types:Array<any> = [
        {name: "Всички категории", value: "all"},
        {name: "Растения", value: "plant"},
        {name: "Парници", value: "greenhouse"},
        {name: "Консумативи", value: "consumables"}
    ];

    ngOnInit(){
        this.select.emit(this.types[0].value);
    }
}