function imprimir(fn) {
    fn();
}

imprimir(function () {
    console.log('funcion anonima');
})
