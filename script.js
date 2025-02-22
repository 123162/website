document.addEventListener("DOMContentLoaded", function () {
    console.log("Sayfa yüklendi!");

    // Teklif Al butonuna tıklanınca uyarı göster
    document.querySelector(".btn-danger").addEventListener("click", function () {
        alert("Teklif almak için bizimle iletişime geçin!");
    });

    // Navbar linklerine tıklanınca konsola yazdır
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            console.log(this.innerText + " linkine tıklandı.");
        });
    });

    // Luxury bölümündeki kartlara hover efekti ekle
    document.querySelectorAll(".luxury-card").forEach(function (card) {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.1)";
        });

        card.addEventListener("mouseout", function () {
            card.style.transform = "scale(1)";
        });
    });
});
