const f = document.getElementById("form");
const campos = {
  nombre: [/^[a-zA-ZÀ-ÿ\s]{3,40}$/, "Nombre inválido"],
  email: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido"],
  tel: [/^\d{7,15}$/, "Teléfono inválido"]
};

f.addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  for (let id in campos) {
    const [regex, msg] = campos[id];
    const input = document.getElementById(id);
    const error = document.getElementById("e-" + id);
    input.classList.remove("error");
    error.textContent = "";
    if (!regex.test(input.value.trim())) {
      input.classList.add("error");
      error.textContent = msg;
      ok = false;
    }
  }
  if (ok) f.reset();
});
