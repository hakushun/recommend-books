export const toggleAriaHidden = (id: string, boolean: boolean): void => {
  if (boolean) {
    document.getElementById(id)?.setAttribute('aria-hidden', 'true');
    return;
  }
  document.getElementById(id)?.removeAttribute('aria-hidden');
};
