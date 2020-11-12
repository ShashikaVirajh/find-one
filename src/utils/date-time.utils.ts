import moment, { unitOfTime } from 'moment';

export const formatDate = (date: moment.MomentInput, format: string) => {
  const formattedDate = moment(date).format(format);
  return formattedDate;
};

export const formatDateToUTC = (date: moment.MomentInput, format: string) => {
  const formattedDate = new Date(moment.utc(date, format).toISOString());
  return formattedDate;
};

export const addDates = (
  value: number,
  type: moment.DurationInputArg2,
  format: string,
  convertToDate: boolean = true,
) => {
  const date = moment().add(value, type);
  return convertToDate
    ? new Date(moment.utc(date, format).toISOString())
    : moment(date).format(format);
};

export const getMonthDate = (date: moment.MomentInput) => {
  return moment(date).format('MMM DD').toString().toUpperCase();
};

export const getCurrentTime = () => moment();

export const isWithinSecond = (time: string) => {
  const currentTime = moment();
  const timeDifference = currentTime.diff(time);

  return timeDifference < 1000;
};

export const getDateDifference = (value: string, diffIn: unitOfTime.Diff = 'years') => {
  const receivedDate = moment(value, 'YYYY-MM-DD');
  const today = moment();
  return today.diff(receivedDate, diffIn);
};

export const getToday = (format: string) => moment().format(format);

export const getMinutesFromSeconds = (time: number) => {
  const minutes = time >= 60 ? Math.floor(time / 60) : 0;
  const seconds = Math.floor(time - minutes * 60);

  const formattedMinutes = minutes >= 10 ? minutes : `${0}${minutes}`;
  const formattedSeconds = seconds >= 10 ? seconds : `${0}${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const getDateDiff = (date1: moment.MomentInput, date2?: moment.MomentInput) => {
  const formattedDate1 = moment(date1).format('YYYY-MM-DD');
  let formattedDate2 = '';

  if (!date2) formattedDate2 = moment().format('YYYY-MM-DD');
  else formattedDate2 = moment(date2).format('YYYY-MM-DD');

  return moment(formattedDate1).diff(moment(formattedDate2), 'days');
};

export const substractDate = (days: number, date?: moment.MomentInput) => {
  if (!date) moment().subtract(days, 'days').toISOString();
  return moment(date).subtract(days, 'days').toISOString();
};
