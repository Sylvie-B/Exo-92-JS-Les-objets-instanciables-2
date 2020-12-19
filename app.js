let Personne = function (sonNom, sonPrenom, sonAge, saVille, sonJob) {
    this.nom = sonNom;
    this.surname = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;
    this.job = sonJob;

    this.getAll = function () {
        return "Ma personne s'appelle " + this.nom + " " + this.surname + ", elle a " + this.age + " ans et est de sexe "
            + this.sexe + ", elle est " + this.job;
    }

    this.setName = function (newName, newJob) {
        this.nom = newName;
        this.job = newJob;
    }
}

