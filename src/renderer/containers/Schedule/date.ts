// @ts-ignore
Date.prototype.getWeek = function() {
  // https://stackoverflow.com/questions/7765767/show-week-number-with-javascript
  const seasonStartDate = new Date(this.getFullYear(), 1, 6);
  return Math.ceil(
    ((this.getTime() - seasonStartDate.getTime()) / 86400000 +
      seasonStartDate.getDay()) /
      7
  );
};
export default function getCurrentWeek() {
  // @ts-ignore
  const currentDate: number = new Date().getWeek();
  return currentDate;
}
