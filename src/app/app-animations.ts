import{trigger,transition,animate,style,state,group,query} from '@angular/animations';

let w="198.75px";
let wE="390px";
let mT="40px";

if(window.innerWidth<700){
	w="178.875px";
	 wE="351px";
	 mT="60px";
}

export const rollIntro = (

		trigger('roll',[
	      state('contract',style({
			width:w,
			position: 'absolute',
			cursor: 'pointer'
	      })),

	      state('expand',style({
	        width:wE,
			position: 'absolute',
	      })),

	      transition('contract<=>expand',[
	        animate('0.5s ease-out')
	        ]),
    ])

)



export const afterRoll=(
	trigger('afterRoll',[
		state('topLeft',style({

			marginTop:mT,
			transform:'scale(0.7)',
			marginBottom:'-15vh',
		})),

		transition('center=>topLeft',[
			animate('1s ease-out')
		]),

		transition('*=>show',[
			style({
				opacity:'0',
				transform:'translate3d(1000px,0,0)',
				width: '100%',
			}),
			animate('0.5s 0.1s ease-out')

		]),
	])
)

export const letsGo = (
	trigger('letsGoExit', [
		state('initial',style({
			position: 'absolute',
			marginTop: '50vh',
			// marginLeft: '26vw',
			display: 'inline-block',
			cursor: 'pointer'
		})),
		transition(':leave', [
			animate('0.5s 0.1s ease-out', style({ opacity:'0', transform:'translateX(-1000px)', position: 'absolute'})),
		])
	])
)


export const fader=(

	trigger('routeAnimations',[
		// transition('basicPage=>rulesIdPage',[query(':leave',animate('10s',style({opacity:'0'})))]), 
		

		transition('basicPage=>rulesPage,basicPage=>rulesIdPage',[style({transform:'translateX(500px)',opacity:'0'}),animate('0.5s ease')]), 	//works!!

		transition('rulesPage=>basicPage,rulesIdPage=>basicPage',[
			style({transform:'translateX(-500px)',opacity:'0'}),
			animate('0.25s  ease-out')
	])

	])
)






