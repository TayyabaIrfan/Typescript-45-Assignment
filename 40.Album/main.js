function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three different album objects
var album1 = makeAlbum("Taylor", "Swift", "1989");
var album2 = makeAlbum("Ed Sheeran", "Divide", 12);
var album3 = makeAlbum("Beyoncé", "Lemonade", 14);
// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
