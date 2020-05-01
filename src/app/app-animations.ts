import{trigger,transition,animate,style,state,group,query} from '@angular/animations';

export const rollIntro = (

		trigger('roll',[
	      state('contract',style({
			width:'198.75px',
			position: 'absolute',
			cursor: 'pointer'
	      })),

	      state('expand',style({
	        width:'390px',
			position: 'absolute'

	      })),

	      transition('contract<=>expand',[
	        animate('1s ease-out')
	        ]),
    ])

)



export const afterRoll=(
	trigger('afterRoll',[
		state('topLeft',style({

			marginTop:'10px',
			transform:'scale(0.7)',
			marginBottom:'-15vh',
		})),

		transition('center=>topLeft',[
			animate('1s')
		]),

		transition('*=>show',[
			style({
				opacity:'0',
				transform:'translate3d(1000px,0,0)',
				width: '100%',
			}),
			animate('1s 0.25s ease-in')

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
			animate('1s 0.2s', style({ opacity:'0', transform:'translateX(-1000px)', position: 'absolute'})),
		])
	])
)


export const fader=(

	trigger('routeAnimations',[
		transition('* <=> *',[
			query(':enter,:leave',[
				style({position:'absolute',
					left:'0',
					width:'100%',
					opacity:'0',
					transform:'scale(0) translateY(100%)'
			}),

			]),

			query(':enter',[

				animate('600ms ease',
					style({

						opacity:'1',transform:'scale(1) translateY(0)'
					}),
				),

			])

		])

	])

)






