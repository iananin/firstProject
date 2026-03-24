let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ' ');
let personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors':{},
    'genres':[],
    'privat': false
};
let a = prompt('один из последних просмотренных фильмов', '');
let b = prompt('на сколько его оцените','');
let c = prompt('один из последних просмотренных фильмов', '');
let d = prompt('на сколько его оцените','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
