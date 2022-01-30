function plantAll(){
    for(let i =1; i<=120; i++)
        cache.push({
            feld: i,
            felder: [i],
            kategorie: undefined,
            mode: 0,
            pflanze: 19,
            produkt: 0})
}

function waterAll(){
    for(let i =1; i<=120; i++)
        cache.push({feld: i,
        felder: [i],
        kategorie: "v",
        mode: 2,
        pflanze: null,
        produkt: "19"})
}


