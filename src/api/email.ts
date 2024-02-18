export const submitEmail = (email: string): void => {
  localStorage.setItem('email', email);
};

export const getEmail = (): string => {
  return localStorage.getItem('email') || '';
};
