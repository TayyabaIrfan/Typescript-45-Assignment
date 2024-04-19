function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
        tracks : tracks
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three different album objects
let album1 = makeAlbum("Taylor", "Swift", "1989");
let album2 = makeAlbum("Ed Sheeran", "Divide", 12);
let album3 = makeAlbum("Beyoncé", "Lemonade", 14);

// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
