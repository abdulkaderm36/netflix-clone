import API_KEY from '../API_KEY'

//Async function to fetch the movies from the API
export const fetchApi = async (type, page) => {
  let data = [];

  //A for loop to increaese the number of movies fetched by the API
  for (let i = 1; i <= page; i++) {
    try {
      const url = `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&page=${i}`;
      const response = await fetch(url);
      const result = await response.json();
      data = [...data, ...result.results];
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return data;
};

//Async function which get details according to a specific movie id
export const fetchMovie = async (movie_id) => {
  let url, response, result;

  try {
    url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    response = await fetch(url);
    result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
