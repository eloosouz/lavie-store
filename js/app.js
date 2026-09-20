(function () {
      "use strict";

      /* ================= [5] WHATSAPP =================
         Troque só a linha abaixo. Formato: 55 + DDD + número, só dígitos,
         sem espaço, sem traço, sem parêntese.
         Campo Grande é DDD 67 → exemplo: 5567991234567
         ================================================ */
      var NUMERO = "5567992703754";

      /* Daqui para baixo não precisa mexer. ---------------------------------
         Todo link que tiver  data-zap="alguma frase"  vira automaticamente um
         link de WhatsApp com essa frase já escrita. Para criar um botão novo
         em qualquer lugar da página, basta copiar um botão existente e trocar
         o texto do data-zap.                                                */
      function link(texto) {
        return "https://wa.me/" + NUMERO + "?text=" + encodeURIComponent(texto);
      }
      document.querySelectorAll("[data-zap]").forEach(function (el) {
        el.setAttribute("href", link(el.getAttribute("data-zap")));
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      });

      /* Foto que não carrega vira aviso pontilhado em vez de ícone quebrado. */
      document.querySelectorAll(".foto img").forEach(function (img) {
        img.addEventListener("error", function () {
          var caixa = img.closest(".foto");
          if (caixa) caixa.classList.add("foto--vazia");
          img.remove();
        });
      });

      /* Linha fina no topo só depois que a página rola. */
      var topo = document.getElementById("topo"), travado = false;
      window.addEventListener("scroll", function () {
        if (travado) return;
        travado = true;
        requestAnimationFrame(function () {
          topo.dataset.fixo = window.scrollY > 24 ? "1" : "0";
          travado = false;
        });
      }, { passive: true });

      document.getElementById("ano").textContent = new Date().getFullYear();
    })();