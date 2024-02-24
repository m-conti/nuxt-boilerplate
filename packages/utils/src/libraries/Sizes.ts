import { clientSide } from './Runtime';

const REM_SIZE = clientSide ? parseFloat(getComputedStyle?.(document.documentElement).fontSize) : 16;

// Size.screen('h') => 100vh
const screen = (key: 'h' | 'w'): number => (key === 'h' ? window.screen.height : key === 'w' ? window.screen.width : 0);
// Size.full => 100%
const full = (size: number) => size;
// Size.ratio(0.5) => 50%
const ratio = (value = 1) => (size: number) => size * value;
// Size.percent(50) => 50%
const percent = (value = 100) => (size: number) => size * value / 100;
// Size.diff(Size.px(-10)) => calc(100% - 10px)
const diff = (value: number, ratio = 1) => (size: number) => (size * ratio) + value;
// Size.px(10) => 10px
const px = (value: number) => value;
// Size.rem(4) => 4rem
const rem = (value: number) => px(value * REM_SIZE);

const Size = {
  screen,
  full,
  ratio,
  percent,
  diff,
  px,
  rem,
};

export default Size;
