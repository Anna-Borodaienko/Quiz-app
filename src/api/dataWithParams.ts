// really hardcode for hates&topics depends on age&gender
import { getAge } from './age';
import { getGender } from './gender';

export const getVisibleHates = () => {
  if (getAge() === '50+' && getGender() === 'Other') {
    return ['A slow speed'];
  } else if (getAge() === '18-29 years') {
    return ['Lack of humor', 'A slow speed'];
  } else
    return [
      'A slow speed',
      'Lack of humor',
      'Lack of logic',
      'Way too generic ending',
    ];
};

export const getVisibleTopics = () => {
  if (getAge() === '50+' && getGender() === 'Other') {
    return ['Action', 'Billionaire', 'Royal Obsession'];
  } else if (getAge() === '18-29 years') {
    return ['Bad Boy', 'Werewolf', 'Young Adult', 'Romance'];
  } else if (getAge() === '40-49 years' && getGender() === 'Female') {
    return ['Action', 'Bad Boy', 'Young Adult'];
  } else
    return [
      'Werewolf',
      'Action',
      'Romance',
      'Young Adult',
      'Bad Boy',
      'Royal Obsession',
      'Billionaire',
    ];
};
