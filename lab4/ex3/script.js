function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var hellos = ["English: Hello World"
,"Spanish: Hola Mundo"
,"French: Bonjour le Monde"
,"German: Hallo Welt"
,"Italian: Ciao Mondo"
,"Portuguese: Olá Mundo"
,"Dutch: Hallo Wereld"
,"Russian: Привет, мир (Privet, mir)"
,"Japanese: こんにちは、世界 (Konnichiwa, sekai)"
,"Chinese (Simplified): 你好，世界 (Nǐ hǎo, shìjiè)"
,"Arabic: مرحبًا بالعالم (Marhaban bial'alam)"
,"Korean: 안녕하세요, 세계 (Annyeong haseyo, segye)"
,"Hindi: नमस्ते दुनिया (Namaste duniya)"
,"Greek: Γειά σας Κόσμε (Geiá sas Kósme)"
,"Swedish: Hej världen"
,"Turkish: Merhaba Dünya"
,"Polish: Witaj Świecie"
,"Vietnamese: Xin chào thế giới"]

function genHello(){
    var num = randomIntFromInterval(0, hellos.length - 1)
    document.getElementById("title").innerHTML = hellos[num]
}

genHello()