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
{id:1,name:"Solo Dance",link:"",image:"assets/midocs/solo_dance.jpg",description:"Grab the moment and dance to live, to breathe, to be free, to be you!",state:"s1"},
{id:2,name:"Creative Writing",link:"",image:"assets/midocs/creative_writing.jpg",description:"If words for you are an expression of your soul, this is it!",state:"s1"},
{id:3,name:"Modelling",link:"",image:"assets/midocs/modelling.jpg",description:"It's becoming a POEM before a camera",state:"s1"},
{id:4,name:"Solo Singing",link:"",image:"assets/midocs/solo_singing.jpg",description:"Let your voice transcend all the boundaries...",state:"s1"},
{id:5,name:"Rap",link:"",image:"assets/midocs/rap.jpg",description:"So you think you can Rap?",state:"s1"},
{id:6,name:"Design",link:"",image:"assets/midocs/design.jpg",description:"Stay tuned...",state:"s1"},
{id:7,name:"Solo Instrumental",link:"",image:"assets/midocs/instrument.jpg",description:"Stay tuned...",state:"s1"},
{id:8,name:"Poetry",link:"",image:"assets/midocs/poetry.jpg",description:"Stay tuned...",state:"s1"},
{id:9,name:"Photography",link:"",image:"assets/midocs/photography.jpg",description:"Stay tuned...",state:"s1"},
{id:10,name:"Beatboxing",link:"",image:"assets/midocs/beatboxing.jpg",description:"Stay tuned...",state:"s1"},

]

