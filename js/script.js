"use strict";
let numberOfFilms;
function start() {
    while (
        numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ' ');
    }
}
start();

let personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

function remMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('один из последних просмотренных фильмов', '');
        let b = prompt('на сколько его оцените', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
} 
remMyFilms();

function detPersLvl() {
    if (personalMovieDB < 10) {
        console.log('вы много посмотрели');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('вы любите фильмы');
    } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('oOoPs вы слишком мало смотрите фильмы');
    }
}
detPersLvl();

alert('Спасибо за ответ !')
console.log(personalMovieDB);

    function showMyDb(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    }
    showMyDb(personalMovieDB.privat);


function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        let quest = prompt(`ваш люб жанр ${i}`);              
        personalMovieDB.genres[i - 1] = quest;
        } 
    } 
    writeYourGenres();

   
    