export const submitLocale = (locale: string): void => {
  localStorage.setItem('locale', locale);
};

export const getLocale = (): string => {
  return localStorage.getItem('locale') || 'English';
};

export const submitGender = (gender: string): void => {
  localStorage.setItem('gender', gender);
}

export const getGender = (): string => {
  return localStorage.getItem('gender') || ''
};

export const submitAge = (age: string): void => {
  localStorage.setItem('age', age);
}

export const getAge = (): string => {
  return localStorage.getItem('age') || ''
};

export const submitHate = (hates: string[]): void => {
  localStorage.setItem('hates', hates.join());
}

export const getHate = (): string[]=> {
  return localStorage.getItem('hates' || '')?.split(',') || [];
}

export const submitTopic = (topics: string[]): void => {
  localStorage.setItem('topics', topics.join());
}

export const getTopic = (): string[] => {
  return localStorage.getItem('topics' || '')?.split(',') || [];
}

export const submitEmail = (email: string): void => {
  localStorage.setItem('email', email);
}

export const getEmail = (): string => {
  return localStorage.getItem('email') || ''
}

export const clearAll = (): void => {
  localStorage.clear();
}

export const getUserInfo = (): {
  order: string;
  title: string;
  type: string;
  answer: string;
}[] => {
  const data = [
    {
      order: "1",
      title: "What is your preferred language?",
      type: "single-select",
      answer: getLocale()
    },
    {
      order: "2",
      title: "What gender do you identify with?",
      type: "single-select-image",
      answer: getGender()
    },
    {
      order: "3",
      title: "What is your age?",
      type: "single-select",
      answer: getAge()
    },
    {
      order: "4",
      title: "What do you hate the most in a book?",
      type: "multiple-select",
      answer: getHate().join()
    },
    {
      order: "5",
      title: "What are your favorite topics?",
      type: "bubble",
      answer: getTopic().join()
    },
    {
      order: "6",
      title: "Email",
      type: "email",
      answer: getEmail()
    }
  ];
  return data;
}
