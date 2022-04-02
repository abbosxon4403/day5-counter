// homework -----------------------------------------------------------------------------------------------
let som = 11111111;
let dollar = som / 9433;
let evro = som / 10354;
let ticket = 500;
let hotel = 250;
let museum = 120;
console.log("ticket =", ticket, '$', "hotel =", hotel, '$', "museum =", evro = 1 * museum, 'yevro')
console.log("SO'M =", Math.round(som), "DOLLAR =", Math.round(dollar), "EVRO =", Math.round(evro));
if (som <= 0) {
    dollar = 0;
    evro = 0;
    console.log("hech narsa yoq");
}
console.log("Qoldi =", Math.round(dollar - (ticket + hotel + museum)), "dollar")
if (dollar - ticket + hotel + museum <= 0) {
    console.log("oka samolyotga ozgina pul yetmiyapti");
} else {
    console.log("yaxshi yo'l sizga! ");
}