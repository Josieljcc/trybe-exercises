const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const warriorHit = () => {
  return Math.floor(
    Math.random() *
      (battleMembers.warrior.strength * battleMembers.warrior.weaponDmg -
        battleMembers.warrior.strength) +
      15
  );
};

const dragonHit = () => {
  return Math.floor(Math.random() * (battleMembers.dragon.strength - 15) + 15);
};

const mageHit = () => {
  let mana = 0;
  if (battleMembers.mage.mana < 15) {
    return { message: "Não possui mana", mana };
  }
  const damage = Math.floor(
    Math.random() *
      (battleMembers.mage.intelligence * 2 - battleMembers.mage.intelligence) +
      battleMembers.mage.intelligence
  );
  mana = 15;
  return { damage: damage, mana: mana };
};

const gameActions = {
  warriorTurn: (action) => {
    battleMembers.warrior.damage = action();
    battleMembers.dragon.healthPoints -= battleMembers.warrior.damage;
  },
  mageTurn: (action) => {
    let { damage, mana } = action();
    battleMembers.mage.damage = damage;
    battleMembers.mage.mana -= mana;
    battleMembers.dragon.healthPoints -= battleMembers.mage.damage;
  },
  dragonTurn: (action) => {
    battleMembers.dragon.damage = action();
    battleMembers.mage.healthPoints -= battleMembers.dragon.damage;
    battleMembers.warrior.healthPoints -= battleMembers.dragon.damage;
  },
  endTurn: () => {
    gameActions.warriorTurn(warriorHit);
    gameActions.mageTurn(mageHit);
    gameActions.dragonTurn(dragonHit);
    console.log(battleMembers);
  },
};

gameActions.endTurn();
