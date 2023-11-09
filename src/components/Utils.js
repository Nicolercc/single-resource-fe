const formatDateForBackend = (date) => {
  try {
    const isoDate = new Date(date).toISOString();
    return isoDate.split("T")[0];
  } catch (error) {
    console.error("Error formatting date for backend:", error);
    return null;
  }
};

const formatDateForFrontend = (date) => {
  try {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  } catch (error) {
    console.error("Error formatting date for backend:", error);
    return null;
  }
};

export { formatDateForBackend, formatDateForFrontend };
