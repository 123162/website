document.addEventListener("DOMContentLoaded", function () {
    console.log("Sayfa yüklendi!");
  
    // "Teklif Al" butonuna tıklanınca İletişim bölümüne yumuşak kaydırma
    document.querySelectorAll(".hero-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Navbar linklerine tıklanınca ilgili bölüme yumuşak kaydırma
    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // İletişim formu gönderim işlemi
    document.querySelector("#contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mesajınız gönderildi, en kısa sürede dönüş sağlanacaktır.");
      this.reset();
    });
  });
