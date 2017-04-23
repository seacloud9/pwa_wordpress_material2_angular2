import { Injectable, state, style, animate, transition,
  AnimationEntryMetadata, AnimationStateTransitionMetadata } from '@angular/core';

@Injectable()
export class AnimationService {
  static fadeInAndOut: (AnimationEntryMetadata | AnimationStateTransitionMetadata)[] = [
    state('in', style({ transform: 'scale3d(.0, .0, .0)' })),
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ];

  static fadeIn: (AnimationEntryMetadata | AnimationStateTransitionMetadata)[] = [
    state('in', style({ transform: 'scale3d(.0, .0, .0)' })),
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(150)
    ])
  ];

  constructor() { }
}
