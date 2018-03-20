import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';
// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('fadeIn',
      style({
        display: 'block',
        opacity: 1
      })
    ),
    state('fadeOut',
      style({
        display: 'none',
        opacity: 0
      })
    ),
    state('in',
      style({
        height: '*'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.4s ease-in')
    ]),
    // transition(':leave', [
    //   animate('.5s ease-out', style({
    //     display: 'none',
    //     opacity: 0
    //   }))
    // ])
    transition('in => void', [
      animate('.5s ease-out', style({
        height: 0,
        opacity: 0
      }))
    ]),
    transition('fadeOut => fadeIn', [
      animate('.4s ease-in')
    ])
  ]);