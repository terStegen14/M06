function calcularPropina() {
    // Obtener los valores del formulario
    let form = document.getElementById('formulario');
    let numPersonas = form.elements['txtPersones'].value || 1;
    let totalFactura = form.elements['txtPreu'].value;
    let calidadServicio = form.elements['txtServei'].value;
    // let numPersonas = parseInt(document.getElementById('txtPersones').value) || 1;
    // let totalFactura = parseFloat(document.getElementById('txtPreu').value);
    // let calidadServicio = document.getElementById('txtServei').value;


    // Calcular la propina según la calidad del servicio
    let porcentajePropina = 0;
    switch (calidadServicio) {
        case 'horrible':
            porcentajePropina = 0;
            break;
        case 'acceptable':
            porcentajePropina = 0.05;
            break;
        case 'genial':
            porcentajePropina = 0.1;
            break;
    }

    // Calcular la propina total y por persona
    let propinaTotal = totalFactura * porcentajePropina;
    let propinaPorPersona = propinaTotal / numPersonas;

    // Verificar si la propina por persona cumple con el mínimo
    const propinaMinimaPorPersona = 0.5;
    if (propinaPorPersona < propinaMinimaPorPersona) {
        alert('Propina por persona: ' + propinaMinimaPorPersona + ' €');
        return;
    }

    // Limpiar el formulario
    document.getElementById('formulario').reset();

    
    // Mostrar el resultado en un alert
    alert('Propina por persona: ' + propinaPorPersona.toFixed(2) + ' €');
    
    
}