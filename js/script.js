let SongList = ['Soy el diablo', 'Radicamos en South central', 'Con calma']
let ArtistList = ['Bad Buny', 'Fuerza Regida', 'Daddy Yanky']
let Image = []
let length=[]
let link=[]



SongList.forEach(function(song) {
        $(`.songName`).append(`<p>${song}</p> `)
});

ArtistList.forEach(function(artist) {
        $(`.ArtistName`).append(`<p>${artist}</p> `)
});
Image.forEach(function(image) {
    $('.ImageLink').append(`<img src=${image}>`)
} );
link.forEach(function(link) {
        $(`.linkName`).append(`<p>${link}</p> `)
});
length.forEach(function(link){
        $('.length').append('<p>${link}</p>')
 });
 $('.addButton').click(function() {

 });
  