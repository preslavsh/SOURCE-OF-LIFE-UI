import {Component} from '@angular/core';
import {PlantsService} from './services/plants.service';
import {CapitalCasePipe} from "./pipes/capital.case.pipe";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";
import {Router} from "@angular/router";

@Component({
    selector: 'sg-plants-component',
    templateUrl: './templates/plants.component.html',
    styleUrls: ['./styles/plants_page_styles.css'],
    providers: [PlantsService],
    pipes: [CapitalCasePipe, FilterByNamePipe],
})
export class PlantsComponent {
    public nameFilter:string = "";

    constructor(
        private _router: Router,
        public service:PlantsService) {
    }

    gotoDetail(en_name:string) {
        this._router.navigate(['/detail',en_name]);
    }


    buy(en_name:string){
        this._router.navigate(['/shop/buy', en_name  ]);
    }
}