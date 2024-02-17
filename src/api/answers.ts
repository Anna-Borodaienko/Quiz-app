import { TFunction } from "i18next";

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

export const getUserInfo = (t: TFunction<"translation", undefined>): {
  order: string;
  title: string;
  type: string;
  answer: string;
}[] => {
  const data = [
    {
      order: "1",
      title: t("What is your preferred language?"),
      type: t("single-select"),
      answer: getLocale()
    },
    {
      order: "2",
      title: t("What gender do you identify with?"),
      type: t("single-select-image"),
      answer: getGender()
    },
    {
      order: "3",
      title: t("What is your age?"),
      type: t("single-select"),
      answer: getAge()
    },
    {
      order: "4",
      title: t("What do you hate the most in a book?"),
      type: t("multiple-select"),
      answer: getHate().join()
    },
    {
      order: "5",
      title: t("What are your favorite topics?"),
      type: t("bubble"),
      answer: getTopic().join()
    },
    {
      order: "6",
      title: t("Email"),
      type: t("email"),
      answer: getEmail()
    }
  ];
  return data;
}
