function getIndexDayOfWeek(dayWeek) {
  return (dayWeek === 0 ? 7 : dayWeek) - 1;
}

export const indexDayOfWeek = getIndexDayOfWeek(new Date().getDay());
