// Full years since I started working professionally (November 2022).
const CAREER_START = new Date(2022, 10, 1);

export const getMyExperienceYears = () => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  if (now.getMonth() < CAREER_START.getMonth()) years -= 1;
  return years;
};
