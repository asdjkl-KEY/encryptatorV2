function encrypt(string){
        
    function returnCrypt(letter) {
            
        letter = dic_encrypt[letter];
        return letter;
    }
    let text = [];
    let content = "";
    for(let i = 0; i < string.length; i++) {
        text.push(returnCrypt(string[i]));
    }
    for(letter of text) {
        content = content + letter;
    }
    return content;
}
function decrypt(string) {
    for(a = 0; a < (string.length/2); a++){
        for (i of dic_decrypt) {
            if(string.includes(i)) {
                string = string.replace(i, dic_decrypt2[i]);
            }
        }
    }
    return string;
}
function copyToClipboard() {
    let content = document.getElementById('code');
    content.select();
    document.execCommand('copy');
    document.getElementById('copy').textContent = "Copiado!";
    setTimeout(() => {
        document.getElementById('copy').textContent = 'Copiar'
    }, 5000);
}
function devolv(id) {
    return document.getElementById(id);
}
let texto = devolv('texto');
let code = document.querySelector('#code');

let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector('#decodificar');
codificar.addEventListener('click', (event) => {
    event.preventDefault();
    code.textContent = encrypt(texto.value);
})
decodificar.addEventListener('click', (event) => {
    event.preventDefault();
    code.textContent = decrypt(texto.value);
})


//footer scripts
function footer() {
    let years = document.getElementById('year');
    let currentYear = new Date().getFullYear();
    years.textContent = currentYear;
}
document.onreadystatechange = () => {
    footer();
}