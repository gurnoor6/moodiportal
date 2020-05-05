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
{id:2, name: "Creative Writing",coverimg:"assets/midocs/creative writing cover.jpg",coverimgmobile:"assets/midocs/creative writing cover.jpg"},
{id:3, name: "Modelling",coverimg:"assets/midocs/modelling cover.jpg",coverimgmobile:"assets/midocs/modelling cover.jpg"},
{id:4, name: "Solo Singing",coverimg:"assets/midocs/solo singing cover.jpg",coverimgmobile:"assets/midocs/solo singing cover.jpg"},
{id:5, name: "Rap",coverimg:"assets/midocs/rap cover.jpg",coverimgmobile:"assets/midocs/rap cover.jpg"},
]