var title = 'Vox Lux'
const url_api_discover = 'https://api.themoviedb.org/3/discover/movie?api_key=ee96a78adac1588daac0c1696680033e&page=';
const url_api_similar_pt1 = 'https://api.themoviedb.org/3/movie/';
const url_api_similar_pt2 = '/similar?api_key=ee96a78adac1588daac0c1696680033e';
var bool = false;
let result =[];

async function getData(){

  const response = await fetch(url_api_discover);
  const inicial_data = await response.json();
  console.log(inicial_data);
 
  for(let i = 1; i < 500; i++){
    const response = await fetch(url_api_discover+i);
    const data = await response.json();

    for (let j = 0; j < 20; j++){
      console.log("entrei");
      if(title==data.results[j].title){
        bool=true;
        movie_id = data.results[j].id;
        break;
      }
    }
    if(bool==true){break;}
  }

  if(bool==true){
    console.log("yay");
    console.log(movie_id);
  }

  const response_1 = await fetch(url_api_similar_pt1+movie_id+url_api_similar_pt2);
  const similar_data = await response_1.json();
  console.log(similar_data);

}

getData();
