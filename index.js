function getVal(id) {
    const row = document.querySelector(`tr[data-id="${id}"] .val`);
    return row ? parseInt(row.innerText) : 0;
}

const alpha = getVal("A5") + getVal("A20");
document.getElementById("alpha-val").innerText = alpha;

const beta = getVal("A15") / getVal("A7");
document.getElementById("beta-val").innerText = beta;

const charlie = getVal("A13") * getVal("A12");
document.getElementById("charlie-val").innerText = charlie;