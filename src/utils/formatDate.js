import moment from "moment";

export const formatDateWithTime = (date) => {
  return moment(date).format("MMMM D, YYYY  h:mm a");
};
