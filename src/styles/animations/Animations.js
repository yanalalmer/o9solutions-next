export const rotate = {
  initial: { rotate: -90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -90, opacity: 0 },
};
export const pop = {
  initial: { scale: 1 },
  animate: { scale: 1.03 },
  exit: { scale: 1 },
};
export const slideIn = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
export const background = {
  initial: { height: 0 },
  animate: { height: '100%' },
  exit: { height: 0 },
};
