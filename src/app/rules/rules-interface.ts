export interface rulesDescription{
	id:number;
	name:string;
	coverimg:string;
	coverimgmobile;

}

let coverimage="assets/midocs/coverimgrules.png";
let coverimgmobile="assets/midocs/coverimgrulesmobile.png";

export const rulesList:rulesDescription[]=[
{id:1, name: "Solo Dance",coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:2, name: "Creative Writing",coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:3, name: "Modelling",coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:4, name: "Solo Singing",coverimg:coverimage,coverimgmobile:coverimgmobile},
{id:5, name: "Design",coverimg:coverimage,coverimgmobile:coverimgmobile},
]