function solve() {
    let mageHero = {
        mageProto: {
            cast(spell){
                this.mana --;
                console.log(`${this.name} cast ${spell}` );
            }
        },
        mage(name){
            let mageObj = {
                ...this.mageProto,
                name,
                mana: 100,
                health: 100
            };

            return mageObj;
        }
    };

    
    let fighterHero = {
        fighterProto: {
            fight(){
                this.stamina --;
                console.log(`${this.name} slashes at the foe!`);
            }
        },
        fighter(name){
            let fighterObj = {
                ...this.fighterProto,
                name,
                stamina: 100,
                health: 100
            };

            return fighterObj;
        }
    };

    let allHeroes = {
        ...fighterHero,
        ...mageHero
    };


    return allHeroes;
}

let create = solve(); 
const scorcher = create.mage("Scorcher"); 
scorcher.cast("fireball"); 
scorcher.cast("thunder"); 
scorcher.cast("light");
 
const scorcher2 = create.fighter("Scorcher 2"); 
scorcher2.fight();
 
console.log(scorcher2.stamina); 
console.log(scorcher.mana); 
