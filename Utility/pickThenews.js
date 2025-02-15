
function pickTheNewest(data,limit) {
  return data.sort((a, b) => {
      const { time: { date: date1, month: month1, year: year1 } } = a;
      const { time: { date: date2, month: month2, year: year2 } } = b;

      if (year1 !== year2) {
          return year2 - year1; 
      }

      
      if (month1 !== month2) {
          return month2 - month1; 
      }

      return date2 - date1; 
  })
}



module.exports = pickTheNewest;
