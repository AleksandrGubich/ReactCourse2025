class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public";
  _apiKey = "apikey=c5d6fc8b83116d92ed468ce36bac6c62";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
    }

    return res.json();
  };

  getAllCharacters = () => {
    return this.getResource(`${this._apiBase}/characters?${_apiKey}`);
  };

  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}/characters/${id}?${_apiKey}`);
  };
}

export default MarvelService;
