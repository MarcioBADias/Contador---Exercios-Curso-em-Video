function contar() {
    let start = document.getElementById('start'); //contador
    let end = document.getElementById('end'); //condição
    let step = document.getElementById('step'); // incremento
    let resp = document.getElementById('resp'); //retorno no HTML

    if (start.value.length == 0 || end.value.length == 0) {
        resp.innerHTML = 'Impossivel contar, preencha as informações';
    } else if (step.value.length == 0) {
        step = 1;
        window.alert('Valor inváido, será considerado o valor 1 para o campo Passos.')
    } else {
        resp.innerHTML = `Contando...`;
        let s = Number(start.value);
        let e = Number(end.value);
        let stp = Number(step.value);

        for (let c = s; c <= e; c += stp) {
            resp.innerHTML += ` ${c} ➲`;            
        }
        resp.innerHTML += ` 🏁`
    }{
        
    }
}