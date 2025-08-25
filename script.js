// pegando os elementos do html
const input = document.getElementById("add-item")
const button = document.querySelector("button")
const ul = document.getElementsByClassName("list")[0]
const containerInfo = document.querySelector(".container-info")

let contadorItem = 0

button.addEventListener("click", () => {

    contadorItem++

    const valor = input.value.trim()

    if (valor) {
        criarItemLista(valor, contadorItem)
        input.value = ''
    }
})

function infoDanger () {
    const div = document.createElement("div")
    div.classList.add("info")
    
    const imgSymbol = document.createElement("img")
    imgSymbol.src = "assets/icons/warning-circle-filled.svg"
    
    const p = document.createElement("p")
    p.textContent = "O item foi removido da lista"
    
    const imgDell = document.createElement("img")
    imgDell.src = "assets/icons/delete-small.svg"
    imgDell.alt = "Botão de deletar mensagem"
    imgDell.addEventListener("click", () => {
        div.remove()
    })
    
    div.append(imgSymbol, p, imgDell)

    setTimeout(() => {
        div.remove()
    }, 3000)

    return div
}

function criarItemLista(valor) {
    // cria o <li>
    const li = document.createElement("li");
    li.classList.add("item");

    // cria o container do checkbox
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-ckeckbox");

    // cria a imagem do checkbox
    const imgCheckbox = document.createElement("div");
    imgCheckbox.classList.add("img-checkbox");

    // cria o input checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    // adiciona img e input ao container
    containerCheckbox.appendChild(imgCheckbox);
    containerCheckbox.appendChild(checkbox);

    // cria o texto do item
    const p = document.createElement("p");
    p.textContent = valor;

    // cria o botão de deletar (imagem)
    const imgDell = document.createElement("img")
    imgDell.src = "assets/icons/Frame-3.png"
    imgDell.classList.add("img-dell")

    // evento para deletar o item
    imgDell.addEventListener("click", () => {
        containerInfo.appendChild(infoDanger())
        li.remove();
    });

    // monta toda a estrutura
    li.appendChild(containerCheckbox);
    li.appendChild(p);
    li.appendChild(imgDell);
    console.log(li)

    ul.appendChild(li)
}

