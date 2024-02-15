export const getLocale = (): string => {
  return localStorage.getItem('locale') || 'English';
};

export const submitLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
};

export const submitGender = (gender: string): void => {
  localStorage.setItem('gender', gender);
}

export const submitAge = (age: string): void => {
  localStorage.setItem('age', age);
}

export const submitHate = (hates: string[]): void => {
  localStorage.setItem('hates', hates.join());
}

export const getHate = (): string | null => {
  return localStorage.getItem('hates' || '');
}

export const submitTopic = (topics: string[]): void => {
  localStorage.setItem('topics', topics.join());
}

export const getTopic = (): string | null => {
  return localStorage.getItem('topics' || '');
}

export const submitEmail = (email: string): void => {
  localStorage.setItem('email', email);
}

export const clearAll = () => {
  localStorage.clear();
}
