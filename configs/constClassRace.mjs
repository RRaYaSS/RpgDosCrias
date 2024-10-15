export const raceClasses = {
    "Tiefling": {
        pos: ["Bardo", "Bruxo", "Druida", "Feiticeiro", "Mago", "Paladino"],
        bad: ["Bárbaro", "Guerreiro", "Ladino", "Monge", "Patrulheiro"]
    },
    "Meio-Orc": {
        pos: ["Bárbaro", "Clérigo", "Paladino", "Guerreiro"],
        bad: ["Bardo", "Bruxo", "Druida", "Feiticeiro", "Ladino", "Mago", "Monge", "Patrulheiro"]
    },
    "Meio-Elfo": {
        pos: ["Bardo", "Bruxo", "Feiticeiro", "Paladino"],
        bad: ["Clérigo", "Druida", "Guerreiro", "Ladino", "Mago", "Monge", "Patrulheiro", "Bárbaro"]
    },
    "Humano": {
        pos: ["Clérigo", "Druida", "Guerreiro", "Ladino", "Mago", "Monge", "Patrulheiro", "Bárbaro","Bardo", "Bruxo", "Feiticeiro", "Paladino"],
        bad:[]
    },
    "Gnomo": {
        pos: ["Druida", "Mago"],
        bad: ["Bárbaro", "Bardo", "Bruxo", "Clérigo", "Feiticeiro", "Guerreiro", "Ladino", "Monge", "Paladino", "Patrulheiro"]
    },
    "Halfling": {
        pos: ["Ladino", "Monge", "Patrulheiro"],
        ok: ["Bardo", "Bruxo", "Feiticeiro", "Paladino", "Guerreiro"],
        bad: ["Bárbaro", "Clérigo", "Druida", "Mago"]
    },
    "Draconato": {
        pos: ["Bárbaro", "Clérigo", "Patrulheiro", "Guerreiro"],
        bad: ["Bardo", "Bruxo", "Druida", "Feiticeiro", "Ladino", "Mago", "Monge", "Paladino"]
    },
    "Elfo": {
        pos: ["Ladino", "Monge", "Patrulheiro", "Guerreiro","Druida"],
        negro:["Bardo", "Bruxo", "Feiticeiro","Paladino"],
        ok:["Clérigo","Mago"],
        bad: ["Bárbaro"]
    },
    "Anões": {
        pos: ["Paladino", "Clérigo", "Bárbaro", "Guerreiro"],
        ok: ["Druida", "Monge"],
        bad: ["Patrulheiro", "Bruxo", "Bardo", "Feiticeiro", "Ladino", "Mago"]
    }
};