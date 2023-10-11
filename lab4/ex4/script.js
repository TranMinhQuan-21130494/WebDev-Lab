function find(){
    var doc = document.querySelector("textarea").value
    var sentence = document.querySelector("input").value

    var final = "<p>"
    var count = 0

    for(let i = 0; i < doc.length - sentence.length + 1; i++){
        let substring = doc.substring(i, i + sentence.length)
        if(substring == sentence){
            count++;
            final += `<mark style="background-color: orange;">${substring}</mark>`
            i += sentence.length - 1
        }
        else{
            final += doc.charAt(i)
        }
    }

    final += "</p>"

    document.querySelector("h2").innerHTML = `Câu "${sentence}" đã xuất hiện ${count} lần.`
    document.querySelector("#print").innerHTML = final
}