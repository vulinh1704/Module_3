let axios = require('axios');
async function getData() {
    let json = await axios.get('htttps://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return json.data;
}
getData().then((result) => console.log(result)).catch(err => console.log(err.message));