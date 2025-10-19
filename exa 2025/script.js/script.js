// Función para formatear un número como moneda
const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
};

// Función que simula el cálculo del impuesto (rol del backend/PHP)
const calculateTip = (amount) => {
    const taxRate = 0.10; // Impuesto fijo del 10%
    const tax = amount * taxRate;
    const total = amount + tax;

    // Redondear a dos decimales
    return {
        tax: Math.round(tax * 100) / 100,
        total: Math.round(total * 100) / 100
    };
};

// Función para calcular el impuesto y mostrar resultados
function calculate() {
    const inputElement = document.getElementById('monto');
    const monto = parseFloat(inputElement.value);
    const resultsSection = document.getElementById('results-section');
    const errorElement = document.getElementById('error-message');
    const messageElement = document.getElementById('pago-message');

    // Limpiar mensajes previos
    errorElement.classList.add('hidden');
    resultsSection.classList.add('hidden');
    messageElement.classList.add('hidden');
    messageElement.innerHTML = '';

    // Validar entrada
    if (isNaN(monto) || monto <= 0) {
        errorElement.textContent = 'Por favor, introduce un monto válido y positivo.';
        errorElement.classList.remove('hidden');
        return;
    }

    // Calcular impuestos
    const { tax, total } = calculateTip(monto);

    // Mostrar resultados
    document.getElementById('initial-amount').textContent = formatCurrency(monto);
    document.getElementById('tax-amount').textContent = formatCurrency(tax);
    document.getElementById('total-amount').textContent = formatCurrency(total);

    resultsSection.classList.remove('hidden');
}

// Función para simular el pago
function completePayment() {
    const resultsSection = document.getElementById('results-section');
    const messageElement = document.getElementById('pago-message');
    const inputElement = document.getElementById('monto');

    // Ocultar resultados
    resultsSection.classList.add('hidden');

    // Mostrar mensaje de éxito
    messageElement.textContent = '✅ ¡Pago Exitoso! ¡Gracias por su preferencia!';
    messageElement.classList.remove('hidden');

    // Limpiar campo de entrada
    inputElement.value = '';
}
