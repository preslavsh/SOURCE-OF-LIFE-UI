import {Component} from 'angular2/core';
import {PlantsService} from './plants.service';

@Component({
    selector: 'sg-plants-component',
    templateUrl: './templates/plants.component.html',
    providers: [PlantsService]
})
export class PlantsComponent {
    constructor(public service:PlantsService){}
}