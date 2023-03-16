export const useMakeStars = (score: number) => {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      star += "⭐";
    } else {
      star += "☆";
    }
  }
  return star;
};
