const containerRoot = document.getElementById('root');
const showData = (STEAM.appnews.newsitems);
const selectAuthor = document.getElementById('category');
const selectTitle = document.getElementById('order');


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
        <div class='img'>
              <a href='${element.url}'>
          </div>
          <h2>${element.title}<br><span>No Aplica</span></h2>
          <p>Feed Label: ${element.feedlabel}</p>
        </div>
      </div>
    </div>`
  } else {
    result = containerRoot.innerHTML += `
    <div>
      <div class='card'>
        <div class='box'>
        <div class='img'>
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

selectAuthor.addEventListener('change', () => {
  let condition = selectAuthor.value
  let filtered = filterAuthor(showData, condition);
  // limpio div
  containerRoot.innerHTML = '';

  filtered.forEach(element => {
    if (element.author === '' && element.feedlabel !== '') {
      result = containerRoot.innerHTML += `
      <div>
        <div class='card'>
          <div class='box'>
          <div class='img'>
                <a href='${element.url}'>
            </div>
            <h2>${element.title}<br><span>No Aplica</span></h2>
            <p>Feed Label: ${element.feedlabel}</p>
          </div>
        </div>
      </div>`
    } else {
      result = containerRoot.innerHTML += `
      <div>
        <div class='card'>
          <div class='box'>
          <div class='img'>
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

//ordenando
selectTitle.addEventListener('change', () => {
  let condition = selectTitle.value
  let filtered = sortOrder(showData,condition);
  //limpio div
  containerRoot.innerHTML = '';

  filtered.forEach(element => {
    //if (element.author === '' && element.feedlabel !== '') {
      result = containerRoot.innerHTML += `
      <div>
        <div class='card'>
          <div class='box'>
          <div class='img'>
                <a href='${element.url}'>
            </div>
            <h2>${element.title}<br><span>No Aplica</span></h2>
            <p>Feed Label: ${element.feedlabel}</p>
          </div>
        </div>
      </div>`
    /*} else {
      result = containerRoot.innerHTML += `
      <div>
        <div class='card'>
          <div class='box'>
          <div class='img'>
                <a href='${element.url}'>
            </div>
            <h2>${element.title}<br><span>${element.author}</span></h2>
            <p>Feed Label: ${element.feedlabel}</p>
          </div>
       </div>
      </div>` 
        }*/
  })
})

window.onload = printData(showData);
