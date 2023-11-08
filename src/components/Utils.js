const formatDateForBackend = (date) => {
  const isoDate = new Date(date).toISOString();
  return isoDate.split("T")[0];
};

const formatDateForFrontend = (date) => {
  const formattedDate = new Date(date).toISOString().split("T")[0];
  return formattedDate;
};

export { formatDateForBackend, formatDateForFrontend };
