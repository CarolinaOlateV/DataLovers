/*const filterTitle = (showData, condition) => {
  const filteredTitle = showData.filter(element => {
    return element.title === condition
  })
  return filteredTitle;
};*/



const filterFeedlabel = (showData, condition) => {
  //filter es un ciclo iterativo como el for, forech, reviw
  const filteredFeedlabel= showData.filter(element => {
      return element.author === condition
  })
  return filteredFeedlabel;
 }