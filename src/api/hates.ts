export const submitHates = (hates: string[]): void => {
  localStorage.setItem('hates', hates.join());
};

export const getSelectedHates = (): string[] => {
  return localStorage.getItem('hates' || '')?.split(',') || [];
};
