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

export const setHate = (hates: string[]): void => {
  localStorage.setItem('hates', hates.join());
}

export const getHate = (): string | null => {
  return localStorage.getItem('hates' || '');
}

export const setTopic = (topics: string[]): void => {
  localStorage.setItem('topics', topics.join());
}

export const getTopic = (): string | null => {
  return localStorage.getItem('topics' || '');
}
