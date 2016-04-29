import {Component} from 'angular2/core';
import {PlantsService} from './services/plants.service';
import {CapitalCasePipe} from "./pipes/capital.case.pipe";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";
import {Router} from "angular2/router";

@Component({
    selector: 'sg-plants-component',
    templateUrl: './templates/plants.component.html',
    styleUrls: ['./styles/plants_page_styles.css'],
    providers: [PlantsService],
    pipes: [CapitalCasePipe, FilterByNamePipe]
})
export class PlantsComponent {
    public nameFilter:string = "";

    constructor(
        private _router: Router,
        public service:PlantsService) {
    }

    gotoDetail(en_name:string) {
        let link = ['PlantDetail', { en_name:en_name  }];
        this._router.navigate(link);
    }


    buy(en_name:string){
        let link = ['BuyForm', { en_name:en_name  }];
        this._router.navigate(link);
    }
}