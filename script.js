// Submissão do formulário -> abre WhatsApp com mensagem pronta
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const contato = document.getElementById("contato").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Coleta serviços selecionados (checkboxes)
    const servicosSelecionados = Array.from(document.querySelectorAll("#form-contato .form-check-input:checked"))
      .map(el => el.value);

    if (!nome || !contato || servicosSelecionados.length === 0) {
      alert("Por favor, preencha Nome, Contato e selecione pelo menos um serviço.");
      return;
    }

    // Monta texto para o WhatsApp
    const texto = [
      `Olá! Sou ${nome}.`,
      `Meu contato: ${contato}.`,
      `Serviços desejados: ${servicosSelecionados.join(", ")}.`,
      mensagem ? `Mensagem: ${mensagem}` : null
    ].filter(Boolean).join(" ");

    // Número da empresa (somente dígitos, com DDI). Já está correto:
    const numero = "5585999809504";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
});
