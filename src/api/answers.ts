export const getLocale = (): string => {
  return localStorage.getItem('locale') || 'English';
};

export const setLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
};