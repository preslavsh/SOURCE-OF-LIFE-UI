import {Injectable} from 'angular2/core';
import {Plant} from "../models/plant";

@Injectable()
export class GreenhouseService{
    public greenhouses:any[]=[
        {
            "id":1,
            "name":"Парник в ресторанта",
            "plants":[{
                "name": "грах",
                "en_name": "pea",
                "specific": "sprout",
                "description":"",
                "ph":"6.0 - 7.5",
                "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
            }]
        },
        {
            "id":2,
            "name":"Парник в дома",
            "plants":[{
                "name": "маруля",
                "en_name": "lettuce",
                "description":"",
                "ph":"6.0 - 7.0",
                "dishes":[{name:'Песто',img_name:"pesto.jpg"},{name:'Капрезе',img_name:"kapreze.jpg"}]
            }]
        }
    ];

    public getGreenHouse(id:number):any{
        return this.greenhouses.filter(g=>g.id==id)[0]
    }

    public addPlant(id:number,plant:Plant){
        this.greenhouses.filter(g=>g.id==id)[0].plants.push(plant);
    }
}