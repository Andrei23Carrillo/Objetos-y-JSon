function postre(id, type, rellenos, glaseado){
    this.id = id;
    this.type = type;
    this.name = "cake";
    this.ppu = 0.55;
    this.rellenos = rellenos;
    this.glaseado = glaseado;
}

//Glaseados

let glaseados = [
    {
        "id":"5001",
        "type":"None"
    },
    {
        "id":"5002",
        "type":"Glazed"
    },
    {
        "id":"5003",
        "type":"Chocolate"
    },
    {
        "id":"5004",
        "type":"Maple"
    },
    {
        "id":"5005",
        "type":"Sugar"
    },
    {
        "id":"5006",
        "type":"Chocolate with sprinkles"
    },
    {
        "id":"5007",
        "type":"Powdered Sugar"
    }    
];

//rellenos
let rellenos = [
    {
        "id":"1001",
        "type":"regular"
    },
    {
        "id":"1002",
        "type":"Chocolate"
    },
    {
        "id":"1003",
        "type":"Blueberry"
    },
    {
        "id":"1004",
        "type":"Devil's Food"
    }
];


let postre1  = new postre ("0001", "Donut",rellenos[2],glaseados[3])

console.log(postre1);