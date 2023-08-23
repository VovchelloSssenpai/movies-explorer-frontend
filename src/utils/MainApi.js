class MainApi {
    constructor({ baseUrl, headers }) {
      this.Url = baseUrl;
      this.headers = headers;
      this.authorization = headers.authorization;
      this.contentType = headers["Content-Type"];
      this.profileURL = `${baseUrl}/users/me`;
    }
  
  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
  
    // getInitialProfileData(data) {
    //   return fetch(this.profileURL, {
    //     method: "GET",
    //     headers: {"Content-Type": "application/json",
    //     "Authorization" : `Bearer ${data}`}
    //   }).then(this._checkResponse);
    // }
  
    // getInitialImages(data) {
    //   return fetch(this.imageUrl, {
    //     method: "GET",
    //     headers: {"Content-Type": "application/json",
    //     "Authorization" : `Bearer ${data}`}
    //   }).then(this._checkResponse);
    // }

  
    // addNewImage({ name, link }) {
    //   return fetch(this.imageUrl, {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json",
    //     "Authorization" : `Bearer ${localStorage.getItem('token')}`},
    //     body: JSON.stringify({
    //       name: name,
    //       link: link,
    //     }),
    //   }).then(this._checkResponse);
    // }
  
    // deleteImage(cardID) {
    //   return fetch(`${this.imageUrl}/${cardID}`, {
    //     method: "DELETE",
    //     headers: {"Content-Type": "application/json",
    //     "Authorization" : `Bearer ${localStorage.getItem('token')}`},
    //   }).then(this._checkResponse);
    // }
  

  
    // removeLike(cardID) {
    //   return fetch(`${this.imageUrl}/${cardID}/likes`, {
    //     method: "DELETE",
    //     headers: {"Content-Type": "application/json",
    //     "Authorization" : `Bearer ${localStorage.getItem('token')}`},
    //   }).then(this._checkResponse);
    // }
  
    // updateAvatar(link) {
    //   return fetch(`${this.profileURL}/avatar`, {
    //     method: "PATCH",
    //     headers: {"Content-Type": "application/json",
    //     "Authorization" : `Bearer ${localStorage.getItem('token')}`},
    //     body: JSON.stringify({
    //       avatar: link,
    //     }),
    //   }).then(this._checkResponse);
    // }
  
    removeLike(cardID) {
      return fetch(`${this.Url}/movies/${cardID}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('token')}`},
      }).then(this._checkResponse);
    }


//    changeLikeCardStatus(cardId, isLiked){
//     if(isLiked){return this.placeLike(cardId)} else{ return this.removeLike(cardId)}
//    }
  
  
    getLikedMovies() {
      return fetch(`${this.Url}/movies/`, {
        method: "GET",
        headers: {"Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('token')}`}
      }).then(this._checkResponse);
    }


    placeLike({ country , director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN, id }) {
    return fetch(`${this.Url}/movies/`, {
      method: "POST",
      headers: {"Content-Type": "application/json",
      "Authorization" : `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        nameRU: nameRU,
        nameEN: nameEN,
        movieId: id,
      }),
    }).then(this._checkResponse);
  }

    updateUserInfo({ name, email }) {
      return fetch(this.profileURL, {
        method: "PATCH",
        headers: {"Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('token')}`},
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }).then(this._checkResponse);
    }

  register(data){
    return fetch(`${this.Url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    }).then(this._checkResponse);
   
  }
  
  authorize(data){
    return fetch(`${this.Url}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    }).then(this._checkResponse);
  }
  
  authorizationCheck(data){
    return fetch(`${this.Url}/users/me`, {
      method: "GET",
      headers: {"Content-Type": "application/json",
                "Authorization" : `Bearer ${data}`}
    }).then(this._checkResponse);
  }
  }
  
  const profileApi = new MainApi({ baseUrl: "https://api.diplomvova.nomoredomains.xyz",
  headers: {
    "Content-Type": "application/json",
  },});
  

  export { profileApi };