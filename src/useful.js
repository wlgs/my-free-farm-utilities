// Plants all over field with given plant id
// If u are going to plant corn (which is 2x2 in size on the field) u must specify correct ids in `felder` (!)
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


