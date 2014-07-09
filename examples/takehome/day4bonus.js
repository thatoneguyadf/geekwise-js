var movies = [
    "back to the future",
    "desperado",
    "donnie darko",
    "date night",
    "iron man",
    "the cell",
    "superman",
    "the jerk",
    "howard the duck",
    "from dusk til dawn"
];

function capitalize(str) {
    if (!str || typeof str !== "string") {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}

//initially loop over our movie array.  For each movie, split the
//string to get another array, then loop over that, capitalizing each piece
//then rejoining on a space
for (var i = 0, len = movies.length; i < len; i++) {
    var movie = movies[i];
    var moviePieces = movie.split(" ");

    for (var j = 0; j < moviePieces.length; j++) {
        var moviePiece = moviePieces[j];
        moviePieces[j] = capitalize(moviePiece);
    }

    movies[i] = moviePieces.join(" ");
}

console.log(movies);