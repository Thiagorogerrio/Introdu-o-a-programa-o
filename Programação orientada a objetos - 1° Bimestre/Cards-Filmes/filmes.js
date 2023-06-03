let Film1 = {
    nome: "Homem-Aranha",
    diretor: "Sam Raimi",
    anoDeLancamento: 2002,
    genero: "Ação/Fantasia",
    poster: 'Homiran-2002.jpg'
};

let Film2 = {
    nome: "Veloroso e rapidozo 9",
    diretor: "Justin Lin",
    anoDeLancamento: 2021,
    genero: "Ação/Aventura",
    poster: 'family - 2021.jpg'
};

let Film3 = {
    nome: "Interestelar",
    diretor: "Christopher Nolan",
    anoDeLancamento: 2014,
    genero: "Ação/Aventura",
    poster: 'inter-2014.png'
};

let Film4 = {
    nome: "Sexta-feira 13",
    diretor: "Sean S. Cunningham",
    anoDeLancamento: 1980,
    genero: "Terror/Slasher",
    poster: 'jas1-1980.jpg'
};

let Film5 = {
    nome: "Carros",
    diretor: "John Lasseter",
    anoDeLancamento: 2006,
    genero: "Infantil/Comédia",
    poster: 'MC-2006.jpg'
};

let Film6 = {
    nome: "Branca de Neve",
    diretor: "David Hand",
    anoDeLancamento: 1937,
    genero: "Fantasia/Musical",
    poster: 'neve da branca-1937.jpg'
};

let Film7 = {
    nome: "pokemon",
    diretor: "Kunihiko Yuyama",
    anoDeLancamento: 2001,
    genero: "Aventura/Fantasia",
    poster: 'pokemon-2001.jpg'
};

let Film8 = {
    nome: "Power Rangers",
    diretor: "Dean Israelite",
    anoDeLancamento: 2017,
    genero: "Ficção científica/Ação",
    poster: 'power-2017.jpg'
};

let Film9 = {
    nome: "Shrek",
    diretor: "Vicky Jenson",
    anoDeLancamento: 2001,
    genero: "Fantasia/Comédia",
    poster: 'shrek-2001.jpg'
};

let Film10 = {
    nome: "Terrifier 2",
    diretor: "Damien Leone",
    anoDeLancamento: 2022,
    genero: "terror/slasher",
    poster: 'terri-2022.webp'
};

let listsDeFilms = []
listsDeFilms.push(Film1, Film2, Film3, Film4, Film5, Film6, Film7, Film8, Film9, Film10)

for (let i = 0; i < listsOfFilms.length; i++) {
    console.log('teste')
    document.write(
        `<div class = 'card'>
        <img src='img/${listsDeFilms[i].poster}' />
        <h2 class="nome">Nome: ${listsDeFilms[i].nome} </h2>
        <p class="diretor">diretor: ${listsDeFilms[i].diretor} </p>
        <p class="ano">Ano de Fabricação: ${listsDeFilms[i].anoDeLancamento} </p>
        <p class="genero">Gênero: ${listsDeFilms[i].genero} </p>
    </div>
`);

}