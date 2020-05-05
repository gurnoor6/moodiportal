export interface rulesDescription{
	id:number;
	name:string;
	coverimg:string;
	coverimgmobile;

}

let coverimage="assets/midocs/coverimgrules.png";
let coverimgmobile="assets/midocs/coverimgrulesmobile.png";

export const rulesList:rulesDescription[]=[
{id:1, name: "Solo Dance",coverimg:"assets/midocs/coverimgrules.png",coverimgmobile:"assets/midocs/coverimgrules.jpg"},
{id:2, name: "Creative Writing",coverimg:"assets/midocs/creative writing.jpg",coverimgmobile:"assets/midocs/creative writing.jpg"},
{id:3, name: "Modelling",coverimg:"assets/midocs/modelling.jpg",coverimgmobile:"assets/midocs/modelling.jpg"},
{id:4, name: "Solo Singing",coverimg:"assets/midocs/solo singing.jpg",coverimgmobile:"assets/midocs/solo singing.jpg"},
{id:5, name: "Rap",coverimg:"assets/midocs/rap.jpg",coverimgmobile:"assets/midocs/rap.jpg"},
]