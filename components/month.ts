export const getThisMonth = (): string => {
  const today = new Date();
  const thisMonth = `${today.getMonth() + 1}`;
  return thisMonth;
};
