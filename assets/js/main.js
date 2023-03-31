const div = document.querySelector(div-1)




btn.onclick=function(){

fetch("https://api.tvmaze.com/shows")
.then(data=>data.json)
.then(arr=>{   
   
  for (let i=0;i,arr.length;i++){
   div.innerHTML +=`<div class="card col-4" ">
      <img src="${arr[i].image.medium}" class="card-img-top" alt="...">
      <div class="card-body">
            <h5 class="card-title">${arr[i].name}</h5>
            <p class="card-text">${arr[i].langugage}<br>${arr[i].genres.Science-Fiction}</p>
            <a href="${arr[i].officialSite}" class="btn btn-primary">Official Site</a>
            <p>${arr[i].premiered}<br>${arr[i].ended}</p> 
      </div>
    </div>`
    }
})
}