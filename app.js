async function getGif(q){
    const response = await axios.get('http://api.giphy.com/v1/gifs/search',{params:{q, api_key:'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}})
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