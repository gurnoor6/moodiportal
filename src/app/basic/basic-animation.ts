import {query,trigger,state,transition,style,animate,keyframes} from '@angular/animations';

export const splitScreen=(

	trigger('slideImg',[

		state('s1',
			style({width:'200%'}),

		),
		state('s2',

			style({width:'100%'}),
		),

		transition('s1<=>s2',animate('.1s'))

	])

)

export const toggleText=(
	trigger('displayText',[

		transition(':enter',[
			animate('.5s',keyframes([
				style({opacity:'0',offset:'0'}),
				style({opacity:'1',offset:'1.0'})

			]))]),

		transition(':leave',[
			animate('50ms',keyframes([
				style({opacity:'1',offset:'0'}),
				style({opacity:'0',offset:'1.0'})

			]))])

		])

)


