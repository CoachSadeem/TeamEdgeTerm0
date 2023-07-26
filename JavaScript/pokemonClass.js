
class Pokemon {
    
    constructor(species, type1, type2, color, isEvolved, height, weight, nickname, pokedex, moves) {
        this.species = species;
        this.type1 = type1;
        this.type2 = type2;
        this.moves = moves;
        this.color = color;
        this.isEvolved = isEvolved;
        this.height = height;
        this.weight = weight;
        this.nickname = nickname;
        this.pokedex = pokedex;
    }
}

let Eevee = new Pokemon();
Eevee.nickname = "Bunny";
Eevee.moves = ["quick attack", "bite"];
Eevee.type1 = "normal";
Eevee.height = 3;
Eevee.species = "Eevee"

let Charmander = new Pokemon();
Charmander.nickname = "Char";
Charmander.moves = ["fire blast", "bite"];
Charmander.type1 = "fire";
Charmander.height = 5;
Charmander.species = "Charmander"

console.log(Eevee)
console.log(Charmander)

Eevee.nickname = "Kopi"
console.log(Eevee)