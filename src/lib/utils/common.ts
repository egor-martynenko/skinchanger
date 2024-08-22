export const addOverflowHiddenToBody = (paddingRight: string = ''): void => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const html = document.querySelector('html') as HTMLHtmlElement;

  body.classList.add('overflow-hidden');
  html.classList.add('overflow-hidden');

  if (paddingRight) {
    body.style.paddingRight = paddingRight;
  }
};

export const removeOverflowHiddenFromBody = (): void => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const html = document.querySelector('html') as HTMLHtmlElement;

  body.classList.remove('overflow-hidden');
  html.classList.remove('overflow-hidden');

  body.style.paddingRight = '';
};

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 };

  return { windowWidth };
};
