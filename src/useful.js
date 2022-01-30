// Plants all over field with given plant id
function plantAll(id){
    for(let i =1; i<=120; i++)
        cache.push({
            feld: i,
            felder: [i],
            kategorie: undefined,
            mode: 0,
            pflanze: id,
            produkt: 0})
}

// Waters all plants (matching id) on the field
function waterAll(id){
    for(let i =1; i<=120; i++)
        cache.push({feld: i,
        felder: [i],
        kategorie: "v",
        mode: 2,
        pflanze: null,
        produkt: "id"})
}


