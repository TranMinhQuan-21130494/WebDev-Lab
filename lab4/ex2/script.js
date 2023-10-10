function changeParam() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var out = '<p>'
    if (a.length > 0 && a != 0) {
        out += `${a}x<sup>2</sup>`
    }
    if (b.length > 0 && b != 0) {
        if (b > 0) {
            out += ` + ${b}x`
        }
        else {
            out += ` - ${-b}x`
        }
    }
    if (c.length > 0 && c != 0) {
        if (c > 0) {
            out += ` + ${c}`
        }
        else {
            out += ` - ${-c}x`
        }
    }
    out += ' = 0<\p>'
    document.getElementById('equation').innerHTML = out
}

function solve() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var out = '<p>'

    if (a.length == 0 || a == 0) {
        if (b.length == 0 || b == 0) {
            if (c.length == 0 || c == 0) {
                out += 'Phương trình vô số nghiệm'
            }
            else {
                out += 'Phương trình vô nghiệm'
            }
        }
        else {
            out += `Phương trình có nghiệm x = ${-c / b}`
        }
    }
    else {
        delta = b * b - 4 * a * c
        if (delta < 0) {
            out += 'Phương trình vô nghiệm'
        }
        else if (delta == 0) {
            out += `Nghiệm của phương trình là x = ${-b / (2 * a)}`
        }
        else {
            out += `Nghiệm x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
        }
    }

    out += '<\p>'
    document.getElementsByClassName("result")[0].innerHTML = out
}