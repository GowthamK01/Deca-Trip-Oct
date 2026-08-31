const BASE_KM = 1300;

const mileage = document.getElementById("mileage");
const petrol = document.getElementById("petrol");
const toll = document.getElementById("toll");
const localKm = document.getElementById("localKm");

function money(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(n);
}

function updateBudget() {
  const km = BASE_KM + Number(localKm.value || 0);
  const efficiency = Number(mileage.value || 14);
  const fuelRate = Number(petrol.value || 116);
  const tollBudget = Number(toll.value || 0);

  const litres = km / efficiency;
  const fuelCost = litres * fuelRate;
  const total = fuelCost + tollBudget;

  document.getElementById("totalDistance").textContent = `~${Math.round(km).toLocaleString("en-IN")} km`;
  document.getElementById("litres").textContent = `${litres.toFixed(1)} L`;
  document.getElementById("fuelCost").textContent = money(fuelCost);
  document.getElementById("tollCost").textContent = money(tollBudget);
  document.getElementById("tripCost").textContent = money(total);
}

[mileage, petrol, toll, localKm].forEach(el => el.addEventListener("input", updateBudget));
updateBudget();

document.querySelectorAll('.check-grid input').forEach(box => {
  box.addEventListener('change', () => {
    box.parentElement.style.opacity = box.checked ? "0.55" : "1";
    box.parentElement.style.textDecoration = box.checked ? "line-through" : "none";
  });
});
