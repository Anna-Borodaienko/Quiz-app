export const getLocale = (): string => {
  return localStorage.getItem('locale') || 'English';
};

export const setLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
};

export const setGender = (gender: string): void => {
  localStorage.setItem('gender', gender);
}

export const setAge = (age: string): void => {
  localStorage.setItem('age', age);
}

export const setHate = (hate: string[]): void => {
  localStorage.setItem('hate', hate.join());
}

export const getHate = (): string | null => {
  return localStorage.getItem('hate' || '');
}
