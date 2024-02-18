export const submitAge = (age: string): void => {
  localStorage.setItem('age', age);
};

export const getAge = (): string => {
  return localStorage.getItem('age') || '';
};
