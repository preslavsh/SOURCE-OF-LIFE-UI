import {Injectable} from '@angular/core';

@Injectable()
export class GreenhouseModelsService {
    public models:Array<any> = [
        {
            "id": 1,
            "category":"greenhouse",
            "name": "Голям парник",
            "en_name": "biggreenhouse",
            "description": `С размер на голям хладилник, вие можете да
            отгледате голям брой различни растение`
        },
        {
            "id": 2,
            "category":"greenhouse",
            "name": "Малък парник",
            "en_name": "smallgreenhouse",
            "description": `С размер на малък хладилник, вие можете да
            отгледате различни растение`
        },
        {
            "id": 3,
            "category":"greenhouse",
            "name": "Плот парник",
            "en_name": "plotgreenhouse",
            "description": `С размер на малък хладилник, вие можете да
            отгледате различни растения и да го използвате за плот в
            кухнята`
        }
    ]
}