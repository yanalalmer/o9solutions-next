export const formatTime = (startTime) => {
  const startTimeObj = new Date(startTime);
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  const timeOnly = startTimeObj.toLocaleTimeString([], options);
  const formattedTime = timeOnly.replace(/\s/g, '');
  return formattedTime;
};
