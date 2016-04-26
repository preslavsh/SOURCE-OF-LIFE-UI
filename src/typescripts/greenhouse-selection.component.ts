import {Component,OnInit} from 'angular2/core';
import {GreenhouseService} from './services/greenhouse.service';
import {PlantsService} from './services/plants.service';
import {RouteParams} from 'angular2/router';
import {Plant} from "./models/plant";
import {Greenhouse} from "./models/greenhouse";

@Component({
    selector: "sg-greenhouse-selection",
    templateUrl: "templates/greenhouse-selection.component.html",
    styleUrls: ['styles/greenhouse-selection.component.css'],
    providers: [GreenhouseService, PlantsService]
})
export class GreenHouseSelectionComponent implements OnInit {

    public plant:Plant;
    public greenhouse:Greenhouse;
    public areTheSame:boolean=false;
    public hasNotPlant:boolean=true;

    constructor(private _plantService:PlantsService,
                public  greenhouseService:GreenhouseService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let en_name:string = this._routeParams.get('en_name');
        let p = this._plantService.getByEnName(en_name);
        this.plant = new Plant(p.name, p.en_name, p.dishes);
        this.greenhouse = this.greenhouseService.greenhouses[0];
        this.onChangeGreenHouse(this.greenhouseService.greenhouses[0].id);
    }

    goBack() {
        window.history.back();
    }

    onChangeGreenHouse(value) {
        let ghouse = this.greenhouseService.getGreenHouse(parseInt(value));
        let havePlants:boolean = ghouse.plants && ghouse.plants.length!==0;
        if(havePlants){
            this.greenhouse = new Greenhouse(ghouse.id, ghouse.name, ghouse.plants);
            this.areTheSame = (this.plant.en_name===this.greenhouse.plants[0].en_name);
        }else{
            this.greenhouse = new Greenhouse(ghouse.id, ghouse.name,[new Plant("","")]);
            this.areTheSame = false;
        }
        this.hasNotPlant=!havePlants;
    }

    beginGrowing() {
        this.greenhouseService.replacePlant(this.greenhouse.id, this.plant);
        let ghouse = this.greenhouseService.getGreenHouse(this.greenhouse.id);
        this.greenhouse = new Greenhouse(ghouse.id, ghouse.name, ghouse.plants);
        this.hasNotPlant=false;
        this.areTheSame=true;
    }
}