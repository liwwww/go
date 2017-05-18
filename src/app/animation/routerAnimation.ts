import {
  trigger, // 动画封装触发，外部的触发器
  state, // 转场状态控制
  style, // 用来书写基本的样式
  transition, // 用来实现css3的 transition
  animate, // 用来实现css3的animations
  keyframes // 用来实现css3 keyframes的
} from '@angular/animations';


export const fadeIn = trigger(
    'openClose',
    [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 0 })
      ])
    ]);