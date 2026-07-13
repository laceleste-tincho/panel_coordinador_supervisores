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

  const esViernes = hoy.getDay() === 5;
  const pillProduccion = document.getElementById("pill-produccion");
  const badgeProduccion = document.getElementById("badge-produccion");

  if (esViernes) {
    pillProduccion.classList.add("alert");
    pillProduccion.querySelector("strong").textContent = "Hoy toca actualizar";
    badgeProduccion.textContent = "Actualiza hoy";
    badgeProduccion.classList.add("soon");
  }
}

document.addEventListener("DOMContentLoaded", init);
