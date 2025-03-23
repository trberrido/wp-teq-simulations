/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

const { actions } = store( 'sim', {
	actions: {
		next: () => {
			const context = getContext();
			context.index = context.index < context.slidesLength - 1 ? context.index + 1 : 0;
			actions.transition();
		},
		prev: () => {
			const context = getContext();
			context.index = context.index > 0 ? context.index - 1 : context.slidesLength - 1;
			actions.transition();
		},
		transition: () => {
			const { index } = getContext();
			const element = getElement().ref;
			const parent = element.closest('.wp-block-sim-slides')
			const slides = parent.querySelectorAll( '.sim-slides__content > .sim-slide' );
			const rido = parent.querySelector( '.sim-slides__rido' );
			rido.classList.add( 'sim-slides__rido--fadein' );
			setTimeout( () => {

				slides.forEach( slide => {
					slide.classList.remove( 'sim-slide--active' );
					slide.classList.add( 'sim-slide--inactive' );
				});
				slides[index].classList.add( 'sim-slide--active' );
				slides[index].classList.remove( 'sim-slide--inactive' );

				rido.classList.add( 'sim-slides__rido--fadeout' );
				rido.classList.remove( 'sim-slides__rido--fadein' );

				setTimeout( () => {
					rido.classList.remove( 'sim-slides__rido--fadeout' );
				}, 1250);


			}, 1750);

		}
	},
	callbacks: {
		init: () => {
			const context = getContext();
			const element = getElement();
			context.slidesLength = element.ref.querySelectorAll(':scope > .sim-slides__content > .sim-slide').length;
			const firstSlide = element.ref.querySelector(':scope > .sim-slides__content > .sim-slide');
			firstSlide.classList.add('sim-slide--active');
			firstSlide.classList.remove('sim-slide--inactive');
		}
	}
} );