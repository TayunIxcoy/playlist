/*let SongList = ['Soy el diablo', 'Radicamos en South central', 'Con calma']
/*let ArtistList = ['Bad Buny', 'Fuerza Regida', 'Daddy Yanky']
let Image = []
let length=[]
let link=[]



//SongList.forEach(function(song) {
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
  */
 var songOne={ 
     Artist:"Bud Bunny",
     name:"soy el diablo",
     Image:"",
     Link:"",
    length:""
    }
     var songTwo={ 
     Artist:"Daddy Yankee",
     name:"Con Calma",
     Image:"https://m.media-amazon.com/images/I/A1GNxnRnUbL._SS500_.jpg",
     Link:"",
    length:""
    }
     var songThree={ 
     Artist:"Radicamos En South Central",
     name:"Fuerza Regida",
     Image:"",
     Link:"",
    length:""
    }
    var Music = [songOne, songTwo, songThree, ]
    
    //music.forEach(function(music) {
    //$('.music').append()
//} );
 $("songOne").append("<p> Artist : "+songOne["Artist"]+"</p>");
 $("songTwo").append("<p> Artist : "+info[""]+"</p>");