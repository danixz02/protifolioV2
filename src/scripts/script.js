document.getElementById("download-btn").addEventListener("click", function() {
    // Criar um link temporário
    let link = document.createElement("a");
    link.href = "/src/CV/CV-Daniel Friedrich de Moura.pdf";
    link.download = "Daniel Friedrich de Moura - CV.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


console.log(`
  %c👋 Olá, dev curioso! 
  %c
  Gostou do site? Vamos conversar!
  Entre em contato: danielfriedrichm@gmail.com
  `, 
  'font-size: 20px; font-weight: bold;',
  'font-size: 16px;');