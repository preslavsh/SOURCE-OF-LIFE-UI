import {OnInit,Component} from 'angular2/core';
import {PlantsService} from "./services/plants.service";
import {RouteParams,Router} from "angular2/router";
import {Plant} from "./models/plant";

@Component({
    selector: "sg-plant-detail-component",
    templateUrl:"templates/plant-detail.component.html",
    styleUrls:['styles/plant-detail.component.css'],
    providers:[PlantsService]
})
export class PlantDetailComponent implements OnInit {

    public plant:Plant;

    constructor(private _plantService:PlantsService,
                private _routeParams:RouteParams,
                private _router:Router) {
    }

    ngOnInit() {
        let en_name:string = this._routeParams.get('en_name');
        let p = this._plantService.getByEnName(en_name);
        this.plant = new Plant(p.name, p.en_name,p.dishes);
    }

    goBack() {
        window.history.back();
    }

    gotoGreenhouseSelection(en_name:string) {
        let link = ['GreenhouseSelection', { en_name:en_name  }];
        this._router.navigate(link);
    }
}