class MoviesApi {
    constructor({ baseUrl, headers }) {
      this.Url = baseUrl;
      this.headers = headers;
      this.contentType = headers["Content-Type"];
    }
  
  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

    getMovies() {
      return fetch(this.Url, {
        method: "GET",
        headers: {"Content-Type": "application/json",
        }
      }).then(this._checkResponse);
    }
  }
  
  const gettingMoviesApi = new MoviesApi({ baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },});


  export  { gettingMoviesApi };