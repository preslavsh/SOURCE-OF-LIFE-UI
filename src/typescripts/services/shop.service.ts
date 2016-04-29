import {Injectable} from 'angular2/core';
import {ConsumablesService} from "./consumables.service";
import {GreenhouseModelsService} from "./greenhouse-models.service";
import {PlantsService} from "./plants.service";

@Injectable()
export class ShopService {

    public items:Array<any>;

    constructor(private consumablesService:ConsumablesService,
                private greenhouseModelsService:GreenhouseModelsService,
                private plantsService:PlantsService) {
        this.items = greenhouseModelsService.models.concat(consumablesService.consumables).concat(plantsService.plants);
    }


    public getByEnName(en_name:string):any{
        return this.items.filter(i=>i.en_name===en_name)[0];
    }
}