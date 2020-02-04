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
     Artist:"Bad Bunny",
     name:"soy el diablo",
     Image:"https://m.media-amazon.com/images/I/A1GNxnRnUbL._SS500_.jpg",
     Link:"https://www.youtube.com/watch?v=-njVpIGri3M",
    length:"3:16"
    }
     var songTwo={ 
     Artist:"Daddy Yankee",
     name:"Con Calma",
     Image:"https://i1.sndcdn.com/artworks-000481304058-e96g4s-t500x500.jpg",
     Link:"",
    length:""
    }
     var songThree={ 
     Artist:"Fuerza Regida",
     name:"Raicamos En South Central",
     Image:"",
     Link:"",
    length:""
    }
    var music = [songOne, songTwo, songThree, ]
    
music.forEach(function(song) {
    $(".songName").append('<p>'+song.name+'</p>')
    $(".ImageLink").append('<p>'+song.Image+'</p>')
    $(".ArtistName").append('<p>'+song.Artist+'</p>')
    $(".Length").append('<p>'+song.length+'<p/>')
    $(".songLink").append('<p>'+song.Link+'</p>')
});
$(".button").click(function(){
     var newSong={ 
     Artist:$("artist").val(),
     name:$("song").val(),
     Image:$("image").val(),
     Link:$("link").val(),
    length:$("length").val();
    }

})

// $("songOne").append("<p> Artist : "+songOne["Artist"]+"</p>");
// $("songTwo").append("<p> Artist : "+info[""]+"</p>");
