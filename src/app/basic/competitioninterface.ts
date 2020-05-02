export interface Competition{
	id:number;
	name:string;
	link:string;
	image:string;
	description:string;
	state:string;
}

let desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
export const competitionsList:Competition[]=[
{id:1,name:"solo dance",link:"",image:"assets/midocs/dance.jpeg",description:desc,state:"s1"},
{id:2,name:"solo dance",link:"",image:"assets/midocs/violin.png",description:desc,state:"s1"},
{id:3,name:"solo dance",link:"",image:"assets/midocs/violin.png",description:desc,state:"s1"},
{id:4,name:"solo dance",link:"",image:"assets/midocs/dance.jpeg",description:desc,state:"s1"},
{id:5,name:"solo dance",link:"",image:"assets/midocs/violin.png",description:desc,state:"s1"},
{id:6,name:"solo dance",link:"",image:"assets/midocs/dance.jpeg",description:desc,state:"s1"},


]

