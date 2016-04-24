import {Component} from 'angular2/core';
import {PlantsService} from './plants.service';
import {CapitalCasePipe} from "./pipes/capital.case.pipe";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";

@Component({
    selector: 'sg-plants-component',
    templateUrl: './templates/plants.component.html',
    styleUrls: ['./styles/plants_page_styles.css'],
    providers: [PlantsService],
    pipes: [CapitalCasePipe, FilterByNamePipe]
})
export class PlantsComponent {
    public nameFilter:string = "";

    constructor(public service:PlantsService) {
    }
}