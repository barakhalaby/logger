// Data component returns a timestamp to a readable date format that is then returned as a string

export const DateTime = ({ date }) => {
  const current_datetime = new Date(date);

  let formatted_date = `${current_datetime.getFullYear()}-${current_datetime.getMonth() +
    1}-${current_datetime.getDate()} ${current_datetime.getHours()}:${current_datetime.getMinutes()}:${current_datetime.getSeconds()}`;
  return formatted_date;
};
