class Api {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  //agrega al mis headers la propiedad Authorization y el token
  setTokenHeader(token) {
    if (token) {
      this._headers = {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      };
    } else {
      delete this._headers.Authorization;
    }
  }

  getUserInfo() {
    return fetch(`${this._baseURL}/appointment/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserCards() {
    return fetch(`${this._baseURL}/appointment/my-appointments`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getCardById(cardId) {
    return fetch(`${this._baseURL}/appointments/${cardId}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  postCard(data) {
    return fetch(`${this._baseURL}/appointment/appointments`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        patientName: data.patientName,
        phoneNumber: data.phoneNumber,
        date: data.date,
        typeOfAppointment: data.typeOfAppointment,
        age: data.age,
        area: data.area,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseURL}/appointment/appointments/${cardID}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseURL: `http://localhost:4000`,
  headers: {
    "Content-Type": "application/json",
  },
});
