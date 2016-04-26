import {Component,OnInit} from 'angular2/core';
import {GreenhouseService} from './services/greenhouse.service';
import {PlantsService} from './services/plants.service';
import {RouteParams} from 'angular2/router';
import {Plant} from "./models/plant";
import {Greenhouse} from "./models/greenhouse";

@Component({
    selector: "sg-greenhouse-selection",
    templateUrl: "templates/greenhouse-selection.component.html",
    styleUrls:['styles/greenhouse-selection.component.css'],
    providers: [GreenhouseService,PlantsService]
})
export class GreenHouseSelectionComponent implements OnInit {

    public plant:Plant;
    public greenhouse:Greenhouse;

    constructor(private _plantService:PlantsService,
                private greenhouseService:GreenhouseService,
                private _routeParams:RouteParams) {
        this.greenhouse=greenhouseService.greenhouses[0];
    }

    ngOnInit() {
        let en_name:string = this._routeParams.get('en_name');
        let p = this._plantService.getByEnName(en_name);
        this.plant = new Plant(p.name, p.en_name, p.dishes);
    }

    goBack() {
        window.history.back();
    }

    onChangeGreenHouse(value){
        let ghouse = this.greenhouseService.getGreenHouse(parseInt(value.target.value));
        this.greenhouse = new Greenhouse(ghouse.id,ghouse.name,ghouse.plants);
    }
}