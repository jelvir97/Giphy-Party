async function getGif(q){
    const response = await axios.get('http://api.giphy.com/v1/gifs/searchhttps://api.giphy.com/v1/gifs/random?api_key=Dt8pa7y0FGajqkql4MuOdJ98BuOJZ7jC&tag=&rating=g')
    const rdmGif = response.data.data[Math.round(Math.random() * response.data.data.length)];
    appendGif(rdmGif.images.original.url);
}

function appendGif(url){
    $(`<img src="${url}">`).prependTo($('div'))
}

function removeGifs(){
    $('div').empty();
}

$('#gif-btn').on('click',() => getGif($('#search')[0].value));
$('#remove').on('click', removeGifs)