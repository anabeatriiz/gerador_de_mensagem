const arrColor = ['#596e79', '#204051', '#6ba8a9', '#393e46', '#6ba8a9'];
const arrMessage = [
    'O intervalo de tempo entre a juventude e a velhice é mais breve do que se imagina. Quem não tem prazer de penetrar no mundo dos idosos não é digno da sua juventude…',
    'O que eu sinto eu não ajo. O que ajo não penso. O que penso não sinto. Do que sei sou ignorante. Do que sinto não ignoro. Não me entendo e ajo como se entendesse.',
    'Mas sou sempre eu, assente sobre os mesmos pés. O mesmo sempre, graças ao céu e à terra. E aos meus olhos e ouvidos atentos. E à minha clara simplicidade de alma...',
    'Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.',
    'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.'
];
const textP = document.getElementById('text');

const btn = document.getElementById('btn');
btn.addEventListener('click', clicar);

function clicar() {
    const numberRam = Math.floor(Math.random() * arrColor.length);
    document.getElementsByClassName('box_container')[0].style.background = arrColor[numberRam];
    textP.innerHTML = arrMessage[numberRam];
}