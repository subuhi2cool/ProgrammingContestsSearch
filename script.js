let url ="https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests)=>{
console.log(contests)
ihtml = ""
for(item in contests){
    console.log(contests[item])
    ihtml += `
    <div class="card mx-2 my-2" style="width: 22rem;">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="...">
            <div class="card-body mx-2 my2">
              <h5 class="card-title">${contests[item].name}</h5>
              <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
              <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours}</p>
              <p>Starts at :  ${contests[item].start_time}</p>
              <p>Ends at :  ${contests[item].end_time}</p>
              <a href="${contests[item].url}" target="_blank" class="btn btn-primary my-4">Visit Contest</a>
            </div>
          </div>
    `
      cardContainer.innerHTML = ihtml
}
})

