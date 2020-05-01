import{trigger,transition,animate,style,state,group,query} from '@angular/animations';

export const rollIntro = (

		trigger('roll',[
	      state('contract',style({
			width:'198.75px',
	      })),

	      state('expand',style({
	        width:'390px',

	      })),

	      transition('contract<=>expand',[
	        animate('1s ease-out')
	        ]),
    ])

)



export const afterRoll=(
	trigger('afterRoll',[
		state('topLeft',style({

			marginTop:'0',
			transform:'scale(0.7) translateX(-40vw)',
			marginBottom:'-15vh',
		})),

		transition('center=>topLeft',[
			animate('0.5s 0.25s')
		]),

		transition('*=>show',[
			style({opacity:'0',transform:'translate3d(1000px,0,0)'}),
			animate('0.5s 0.75s')

		]),

		transition(':leave',[
			animate('0.25s',style({opacity:'0',transform:'translateX(-1000px)'})),
		]),
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






