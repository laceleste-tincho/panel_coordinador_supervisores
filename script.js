const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function formatearFecha(fecha) {
  const dia = DIAS[fecha.getDay()];
  return `${dia} ${fecha.toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" })}`;
}

function init() {
  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 1);

  document.getElementById("fecha-hoy").textContent = formatearFecha(hoy);
  document.getElementById("fecha-stock").textContent = formatearFecha(ayer);

  if (hoy.getDay() === 5) {
    document.getElementById("nota-produccion").textContent = "Hoy toca actualizar el Plan de Producción";
    document.getElementById("tag-produccion").textContent = "Actualiza hoy";
  }
}

document.addEventListener("DOMContentLoaded", init);
