export const submitGender = (gender: string): void => {
  localStorage.setItem('gender', gender);
};

export const getGender = (): string => {
  return localStorage.getItem('gender') || '';
};
