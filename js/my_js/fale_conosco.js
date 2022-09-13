let inputs = document.querySelector("#form").getElementsByClassName("form-control");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", () => {
        verificarString(`${inputs[i].value}`, `${i}`);
    });

    if (inputs[i].type == "email") {
        inputs[i].addEventListener("blur", () => {
            verificarEmail(`${inputs[i].value}`, `${i}`);
        });
    }
}

function adicionarErro(parent) {
    let p = document.createElement("p");
    let text = document.createTextNode("*Campo Inválido");
    p.appendChild(text);

    let erro = p;
    erro.classList.add("outErro");

    parent.appendChild(erro);
}

function removerErro(parent) {
    parent.removeChild(parent.getElementsByClassName("outErro")[0]);
}

function verificarString(string, idx) {
    let div = document.querySelector("#form").getElementsByTagName("div")[idx];

    if (div.getElementsByClassName("outErro").length < 1) {
        if (string == "") {
            adicionarErro(div);
        }
    } else {
        if (string != "") {
            removerErro(div);
        }
    }
}

function verificarEmail(string, idx) {
    let div = document.querySelector("#form").getElementsByTagName("div")[idx];

    if (div.getElementsByClassName("outErro").length < 1) {
        if (!string.match(/\S+@\S+\.\S+/)) {
            adicionarErro(div);
        }
    } else {
        if (string.match(/\S+@\S+\.\S+/)) {
            removerErro(div);
        }
    }
}