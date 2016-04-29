import {Component,Output,EventEmitter} from '../../../node_modules/angular2/core.d';
import {OnInit} from "../../../node_modules/angular2/core.d";

@Component({
    selector: "sg-select-type",
    template: `
        <select #sel (change)="select.emit($event.target.value)">
             <option *ngFor="#type of types" value="{{type.value}}">{{type.name}}</option>
        </select>
    `
})
export class SelectTypeComponent implements OnInit{

    @Output() select = new EventEmitter();
    public types:Array<any> = [
        {name: "Всички категории", value: "all"},
        {name: "Растения", value: "plant"},
        {name: "Парници", value: "greenhouse"},
        {name: "Консумативи", value: "consumables"}
    ];

    ngOnInit(){
        this.select.emit(this.types[0]);
    }
}