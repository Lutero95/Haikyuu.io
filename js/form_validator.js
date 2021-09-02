function formValidator() {
  var criticism = document.getElementById("criticism");

  if (criticism.value == "") {
    alert("Você precisa inserir uma crítica para poder enviar!");

    return;
  } else if (criticism.value.length > 300) {
    alert(
      "Essa crítica excedeu o limite de caracteres permitido (Limite: 300)"
    );

    return;
  } else {
    alert("Sua crítica foi enviada! Obrigado pela contribuição!");

    return;
  }
}
