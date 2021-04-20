const today = new Date();

export const getThisMonth = (): string => {
  const thisMonth = `0${today.getMonth() + 1}`.slice(-2);
  return thisMonth;
};

export const getThisYear = (): string => {
  const thisYear = `${today.getFullYear()}`;
  return thisYear;
};

export const getThisYearAndMonth = (): string => {
  const thisYearAndMonth = `${getThisYear()}-${getThisMonth()}`;
  return thisYearAndMonth;
};
