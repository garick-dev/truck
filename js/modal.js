// Модальное окно

// открыть по кнопке
$(".js-button-calc").click(function () {
  $(".js-overlay-calc").fadeIn();
});

// закрыть на крестик
$(".js-close-popup").click(function () {
  $("#final_price").empty();
  $("div:empty").text("");
  $("input[type=checkbox]").prop("checked", false);
  $("input#chislo").val("0");
  $(".js-overlay-calc").fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".js-popup-calc");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $("final_price").empty();

    $("div:empty").text("");
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", true);
    $("input#chislo").val("0");
    $(".js-overlay-calc").fadeOut();
  }
});

//Максимально символов в числе

$(document).ready(function () {
  $("#chislo").keypress(function () {
    if (this.value.length == 1) {
      return false;
    }
  });
});
