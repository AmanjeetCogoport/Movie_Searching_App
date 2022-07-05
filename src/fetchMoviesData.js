// in this file fetch api calling method is written to get data from internet. 
// we need to pass a link string and this will return movie search list

let getMovieListBySearch = (apiLink) =>{
    let url = encodeURI(apiLink);
    let movieListJson;
    fetch(url).then( (response) => response.json()).then((data) => {
        
        
    })
}

let finalData; 
getMovieListBySearch("http://www.omdbapi.com/?s=avenger&apikey=fd57d86").then( (data) => {
    finalData = data;
})


console.log("ram " + finalData);

