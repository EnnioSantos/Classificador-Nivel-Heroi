let NomeHeroi = "DelphiWosniak"
let XP = 50000
let tier 
if (XP < 1001){
    tier = "Ferro"
} else if(XP < 2001){
    tier = "Bronze"
} else if(XP < 5001){
    tier = "Prata"
} else if(XP < 7001){
    tier = "Ouro"
} else if(XP < 8001){
    tier = "Platina"
} else if(XP < 9001){
    tier = "Ascendente"
} else if(XP < 10001){
    tier = "Imortal"
} else {
    tier = "Radiante"
}
console.log("O Herói de nome: " + NomeHeroi + " está no nível de: " + tier)