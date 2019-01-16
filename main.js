const containerRoot = document.getElementById('root');
const showData = (STEAM.appnews.newsitems);
//const selectTitle = ('title');
const selectFeedlabel = document.getElementById('category');


const printData = (showData) => { 
let result = '';
  //console.log(showData)
  showData.forEach(element => {
  //console.log(element.feedlabel);
  if (element.author === '' && element.feedlabel !== '') {
    result = containerRoot.innerHTML += `
    <div>
      <div class='card'>
        <div class='box'>
              <a href='${element.url}'>
          </div>
          <h2>${element.title}<br><span>Autor: No Aplica</span></h2>
          <p>Feed Label: ${element.feedlabel}</p>
        </div>
      </div>
    </div>`
  } else {
    result = containerRoot.innerHTML += `
    <div>
      <div class='card'>
        <div class='box'>
              <a href='${element.url}'>
          </div>
          <h2>${element.title}<br><span>${element.author}</span></h2>
          <p>Feed Label: ${element.feedlabel}</p>
        </div>
     </div>
    </div>` 
  }
  });
return result;
}

//filtrando

selectFeedlabel.addEventListener('change', () => {
  let condition = selectFeedlabel.value
  let filtered = filterFeedlabel(showData, condition);
  // limpio div
  containerRoot.innerHTML = '';

  filtered.forEach(element => {
    if (element.author === '' && element.feedlabel !== '') {
      result = containerRoot.innerHTML += `
      <div>
        <div class='card'>
          <div class='box'>
                <a href='${element.url}'>
            </div>
            <h2>${element.title}<br><span>Autor: No Aplica</span></h2>
            <p>Feed Label: ${element.feedlabel}</p>
          </div>
        </div>
      </div>`
    } else {
      result = containerRoot.innerHTML += `
      <div>
        <div class='card'>
          <div class='box'>
                <a href='${element.url}'>
            </div>
            <h2>${element.title}<br><span>${element.author}</span></h2>
            <p>Feed Label: ${element.feedlabel}</p>
          </div>
       </div>
      </div>` 
        }
  })
})
window.onload = printData(showData);
