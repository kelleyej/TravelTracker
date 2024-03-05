function formatDate(newDate){
    let dateModified = newDate.split('/')
    let [year, month, day] = dateModified
    let array = [month, day, year]
    let newArray = array.join('/')

    return newArray; 
};

function setMinDate(dateValue){
    let newDate = dateValue.split('/')
    let modifiedDate = newDate.join('-')

    return modifiedDate
};

function modifyDate(dateValue) {
  let newDate = dateValue.split('-')
  let modifiedDate = newDate.join('/')

  return modifiedDate;
};

function findCurrentYear(currentDate){
    let newDate = currentDate.split('/')
    let [year,,,] = newDate; 

    return year; 
};

function findYesterday(currentDate){
  let today = new Date(currentDate)
  let yesterday = new Date(today.getTime())
  yesterday.setDate(today.getDate() - 1)
  let newDate = yesterday.toDateString()
  let dateArray = newDate.split(' ') 
  dateArray.shift()
  let [month, day, year] = dateArray; 
  return `${month} ${day}, ${year}`
};

export { formatDate, setMinDate, findCurrentYear, modifyDate, findYesterday }