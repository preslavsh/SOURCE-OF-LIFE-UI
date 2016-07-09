import {OnInit,Component} from '@angular/core';
import {PlantsService} from "./services/plants.service";
import {ActivatedRoute,Router} from "@angular/router";
import {Plant} from "./models/plant";

@Component({
    selector: "sg-plant-detail-component",
    templateUrl:"templates/plant-detail.component.html",
    styleUrls:['styles/plant-detail.component.css'],
    providers:[PlantsService],
})
export class PlantDetailComponent implements OnInit {

    public plant:Plant;
    private sub:any;

    constructor(private _plantService:PlantsService,
                private _route:ActivatedRoute,
                private _router:Router) {
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params=>{
            let en_name:string = params['en_name'];
            let p = this._plantService.getByEnName(en_name);
            this.plant = new Plant(p.name, p.en_name,p.ph,p.description,p.water,p.sun,p.dishes);
        });
    }

    goBack() {
        window.history.back();
    }

    gotoGreenhouseSelection(en_name:string) {
        this._router.navigate(['/selection',en_name ]);
    }


    buy(en_name:string){
        this._router.navigate(['/shop/buy/', en_name  ]);
    }
}