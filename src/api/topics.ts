export const submitTopics = (topics: string[]): void => {
  localStorage.setItem('topics', topics.join());
};

export const getSelectedTopics = (): string[] => {
  return localStorage.getItem('topics' || '')?.split(',') || [];
};
