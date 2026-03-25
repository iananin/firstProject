"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ' ');
let personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors':{},
    'genres':[],
    'privat': false
};


for(let i = 0; i < 2; i++){
    let a = prompt('один из последних просмотренных фильмов', '');
    let b = prompt('на сколько его оцените','');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
    if(personalMovieDB <10){
        alert('вы много посмотрели');
    } else if(personalMovieDB.count >= 10&&personalMovieDB < 30){
        alert('вы любите фильмы');
    } else if(personalMovieDB.count>=30){
        alert('вы киноман');
    } else{
        alert('oOoPs вы слишком мало смотрите фильмы');
    }
    
console.log(personalMovieDB);
alert ('Спасибо за ответ !')
