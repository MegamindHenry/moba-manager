function Champ(id, name, hp, attack, attRange, spell1) {
    this.id = id
    this.name = name
    this.hp = hp
    this.attack = attack
    this.attRange = attRange
    this.spell1 = spell1
}

function Champ(champJSON) {
    this.id = champJSON["ChampID"]
    this.name = champJSON["Name"]
    this.hp = champJSON["HP"]
    this.attack = champJSON["Attack"]
    this.attRange = champJSON["AttackRange"]
    this.spell1 = spells[champJSON["Spell1"]]
}

function CurrentChamp(champ) {
    this.id = champ.id
    this.name = champ.name
    this.hp = champ.hp
    this.attack = champ.attack
    this.attRange = champ.attRange
    this.spell1 = champ.spell1
}

function Spell(spellJSON) {
    this.id = spellJSON["SpellID"]
    this.name = spellJSON["Name"]
    this.stunPower = spellJSON["StunPower"]
    this.damage = spellJSON["Damage"]
    this.range = spellJSON["Range"]

}

function initSpells() {
    var spells = {}
    for (var i = 0; i < spellJSON.length; i ++) {
        newSpell = new Spell(spellJSON[i])
        spells[spellJSON[i]["SpellID"]] = newSpell
    }
    return spells
}

function initChamps() {
    var champs = {}
    for (var i = 0; i < champJSON.length; i ++) {
        newChamp = new Champ(champJSON[i])
        champs[champJSON[i]["ChampID"]] = newChamp
    }
    return champs
}
