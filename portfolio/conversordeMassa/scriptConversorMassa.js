function converterParaLibras() {
    const quilos = parseFloat(document.getElementById('quilos').value);

    if (!isNaN(quilos)) {
        // 1 kg = 2.20462 pounds
        const libras = quilos * 2.20462;
        document.getElementById('resultado').innerHTML = `${quilos} kg = ${libras.toFixed(2)} lb`;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um número válido';
    }
}
