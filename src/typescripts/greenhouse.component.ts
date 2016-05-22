import {Component} from 'angular2/core';
import {PlantsService} from "./services/plants.service";
import {GreenhouseService} from "./services/greenhouse.service";
import {Greenhouse} from "./models/greenhouse";
import {Plant} from "./models/plant";
import {Router} from "angular2/router";

@Component({
    selector: 'sg-greenhouse-component',
    templateUrl: './templates/greenhouse.component.html',
    styleUrls: ['styles/greenhouse.component.css'],
    providers: [GreenhouseService, PlantsService]
})
export class GreenHouseComponent {
    public plant:Plant;
    public greenhouse:Greenhouse;
    public hasNotPlant:boolean = true;

    constructor(public  greenhouseService:GreenhouseService,
                private _router:Router) {
        this.greenhouse = this.greenhouseService.greenhouses[0];
        this.onChangeGreenHouse(this.greenhouseService.greenhouses[0].id);
    }

    onChangeGreenHouse(value) {
        let ghouse = this.greenhouseService.getGreenHouse(parseInt(value));
        let havePlants:boolean = ghouse.plants && ghouse.plants.length!==0;
        if(havePlants){
            this.greenhouse = new Greenhouse(ghouse.id, ghouse.name, ghouse.plants);
        }else{
            this.greenhouse = new Greenhouse(ghouse.id, ghouse.name,[new Plant("","","")]);
        }
        this.hasNotPlant=!havePlants;
    }

    saveGreenhouseName(){
        this.greenhouseService.renameGreenhouse(this.greenhouse.id,this.greenhouse.name);
    }

    gotoPlants() {
        let link = ['Plants'];
        this._router.navigate(link);
    }

    buy(){
        let link = ['Shop'];
        this._router.navigate(link);
    }
}