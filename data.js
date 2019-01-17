/*const filterTitle = (showData, condition) => {
  const filteredTitle = showData.filter(element => {
    return element.title === condition
  })
  return filteredTitle;
};*/



const filterAuthor = (showData, condition) => {
  
  const filteredAuthor= showData.filter(element => {
      return element.author === condition
  })
  return filteredAuthor;
 }
 
 const sortOrder = (showData, condition) => {
  //console.log(condition);
  const sorted = showData.sort((a, b) => (a[condition] > b[condition]) ? 1 : -1);
  return sorted;
 }

 