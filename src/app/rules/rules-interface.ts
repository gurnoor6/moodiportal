export interface rulesDescription{
	id:number;
	name:string;
	coverimg:string;

}

let coverimage="assets/midocs/coverimgrules.png";
let coverimgmobile="assets/midocs/coverimgrulesmobile.png";

export const rulesList:rulesDescription[]=[
	{id:1, name: "Solo Dance",coverimg:"assets/midocs/solo_dance_cover.png"},
	{id:2, name: "Creative Writing",coverimg:"assets/midocs/creative_writing_cover.jpg"},
	{id:3, name: "Modelling",coverimg:"assets/midocs/modelling_cover.jpg"},
	{id:4, name: "Solo Singing",coverimg:"assets/midocs/solo_singing_cover.jpg"},
	{id:5, name: "Rap",coverimg:"assets/midocs/rap_cover.jpg"},
	{id:6, name: "Design",coverimg:"assets/midocs/design_cover.jpg"},
	{id:7, name: "Solo Instrumental",coverimg:"assets/midocs/instrument.jpg"},
	{id:8, name: "Poetry",coverimg:"assets/midocs/poetry_cover.jpg"},
	{id:9, name: "Photography",coverimg:"assets/midocs/photography_cover.jpg"},
	{id:10, name: "Beatboxing",coverimg:"assets/midocs/beatboxing_cover.jpg"},
]