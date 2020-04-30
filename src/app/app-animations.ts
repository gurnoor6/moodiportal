import{trigger,transition,animate,style,state} from '@angular/animations';

export const rollIntro = (

		trigger('roll',[
	      state('contract',style({
			width:'198.75px',

	      })),

	      state('expand',style({
	        width:'390px',

	      })),

	      state('moveLeft',style({
	      		// transform:'translate3d(-10vw,-10vh,0)',
	      		opacity:'0',
	      		position:'absolute'
	      })),

	      transition('contract<=>expand,expand=>moveLeft',[
	        animate('1s ease-out')
	        ]),

	      transition(':leave',[
	      	animate('1s',style({transform:'translateX(100px)'}))

	      	])
    ])

)

export const slideLeft=(
	trigger('slideLeft',[

		transition(':enter',[
			style({transform:'translateX(1000px)',opacity:'0'}),
			animate('1s')


		])

	])


)