// Helper Functions or Utilities



// @param {Date} date 
// @returns {string}

const formatDate = (date: Date): string => {
 const options: Intl.DateTimeFormatOptions = {
   year: 'numeric',
   month: '2-digit',
   day: '2-digit',
 };

 return date.toLocaleDateString(undefined, options);
};

export default formatDate;