function calculate() {
    let pv = parseFloat(document.getElementById('pv').value);
    let pa = parseFloat(document.getElementById('pa').value);
    let ua = parseFloat(document.getElementById('ua').value);
    let uv = parseFloat(document.getElementById('uv').value);
    let mc = parseFloat(document.getElementById('mc').value);
    let result = '';

    if (!isNaN(pv) && !isNaN(pa) && !isNaN(ua) && !isNaN(uv)) {
        result = `Margine (Mc): ${(((pv - ((pa / ua) * uv)) / pv) * 100).toFixed(2)}%`;
    } else if (!isNaN(pa) && !isNaN(ua) && !isNaN(uv) && !isNaN(mc)) {
        result = `Prezzo di Vendita (PV): ${(((pa / ua) * uv) / (1 - mc / 100)).toFixed(2)}`;
    } else if (!isNaN(pv) && !isNaN(mc)) {
        result = `Prezzo di Acquisto (PA): ${(pv * (1 - mc / 100)).toFixed(2)}`;
    }

    document.getElementById('result').textContent = result || "Inserisci dati validi!";
}
