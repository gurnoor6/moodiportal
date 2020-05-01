import{trigger,transition,animate,style,state,group,query,animateChild} from '@angular/animations';

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
		transition('p1<=>p2',[
				style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
		]),

	])
)





