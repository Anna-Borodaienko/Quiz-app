export const submitLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
};

export const getLocale = (): string => {
  return localStorage.getItem('locale') || 'English';
};
