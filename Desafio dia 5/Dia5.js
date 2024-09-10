listaSuper = {
    "Carnes":[],
    "Lacteos":[],
    "Panaderia":[],
    "Limpieza":[],
    "Almacen":[],
    "Verduleria":[],
};

function agregarAlimento(){
    let categoria = document.getElementById("categoria").value;

    let alimento = document.getElementById("alimento").value;

    if(alimento){
        listaSuper[categoria].push(alimento);
    }
    mostrarLista();

    document.getElementById("alimento").value= "";

}

function mostrarLista(){
    let listaAlimentos = document.getElementById("listaSupermercado");
    let listaTex = "";

    for(let categoria in listaSuper){
        if(listaSuper[categoria].length > 0){
            listaTex += categoria + ":\n";
            listaSuper[categoria].forEach((alimento, index) => {
                listaTex += " - " + alimento + "\n";
            
                
            });
        }
    }




    listaAlimentos.textContent = listaTex.trim();


}

function enviarLista(){
    let nuneroDeTelefono = "543425048470";
    listaAlimentos = document.getElementById("listaSupermercado").textContent;

    if(listaAlimentos){
        let mensaje = encodeURIComponent("lista de Supermercado:\n" + listaAlimentos);
        let url = `https://api.whatsapp.com/send?phone=${543425048470}&text=${mensaje}`;
        window.open(url,"_blank");
    }

}

