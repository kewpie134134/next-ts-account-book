export const getThisMonth = (): string => {
  const today = new Date();
  const fatherPath = `10${today.getMonth() + 1}`;
  return fatherPath;
};
