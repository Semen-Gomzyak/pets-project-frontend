import {
  format,
  formatDistanceToNowStrict,
  formatDuration,
  parse,
  isDate,
} from 'date-fns';

const AGES_IN_WORDS = {
  '0 years': 'less than a year',
  '1 year': 'one year',
  '2 years': 'two years',
  '3 years': 'three years',
  '4 years': 'four years',
  '5 years': 'five years',
  'more 5 years': 'more than five years',
};

const dateInFormat = (birthdate, dformat) => {
  if (birthdate) {
    const date = new Date(birthdate);

    if (isDate(date)) return format(date, dformat);
  }

  return 'no info';
};

const getAge = birthdate => {
  if (birthdate) {
    const date = new Date(birthdate);

    if (isDate(date))
      return ageInWords(formatDistanceToNowStrict(date, { unit: 'year' }));

    const pData = parseInFormat(date, 'dd.MM.yyyy', new Date());

    if (isDate(pData)) {
      const age = formatDistanceToNowStrict(pData, { unit: 'year' });
      return ageInWords(age);
    }
  }

  return 'no info';
};

const formatDurationInWords = date => formatDuration(date);

const parseInFormat = (birthdate, dateInFormat, referenceDate) => {
  const date = new Date(birthdate);

  return parse(date, dateInFormat, referenceDate);
};

const ageInWords = age => {
  if (+age.split(' ')[0] > 5) {
    age = 'more 5 years';
  }
  return AGES_IN_WORDS[age];
};

export {
  ageInWords,
  dateInFormat,
  getAge,
  formatDurationInWords,
  parseInFormat,
};
