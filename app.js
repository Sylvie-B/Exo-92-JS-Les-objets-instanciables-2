let Personne = function (sonNom, sonPrenom, sonAge, saVille) {
    this.name = sonNom;
    this.surname = sonPrenom;
    this.age = sonAge;
    this.ville = saVille;

    this.getAll = function () {
        return "Ma personne s'appelle " + this.name + " " + this.surname + ", elle a " + this.age + " ans, sa ville " +
            "de naissance est " + this.ville;
    }

    this.setName = function (newName, newJob) {
        this.name = newName;
        this.job = newJob;
    }
}

let sylvie = new Personne('Bataille', 'Sylvie', 45, 'Maubeuge');
let emilie = new Personne('Bataille', 'Emilie', 15, 'Fourmies');
let corinne = new Personne('Mairesse', 'Corinne', 48, 'Maubeuge');
let eric = new Personne('Mairesse', 'Eric', 46, 'Fourmies');
let fred = new Personne('Mairesse', 'Frédérique', 17, 'Lanion');

let table = [
    sylvie,
    emilie,
    corinne,
    eric,
    fred
];

let infos = document.createElement('div');

for( let persos of table){

    infos.innerHTML += persos.name + " " + persos.surname + " " + persos.age + " " + persos.ville +
        " " + persos.getAll() + "<br>";
    document.body.appendChild(infos);
}

