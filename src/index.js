const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const menuItems = document.querySelectorAll("nav a");
menuItems.forEach((item,index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`]
  item.setAttribute("class","italic")
})

const picLogo = document.querySelector("#logo-img");
picLogo.src = siteContent.images["logo-img"];

const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent.cta.h1;

const btn = document.querySelector(".cta-text button");
btn.textContent = siteContent.cta.button;

const picCta = document.querySelector("#cta-img");
picCta.src = siteContent.images["cta-img"];

const h4TopContent = document.querySelectorAll(".top-content h4");
h4TopContent[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4TopContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const pTopContent = document.querySelectorAll(".top-content p");
pTopContent[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pTopContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const picMiddle = document.querySelector("#middle-img");
picMiddle.src = siteContent.images["accent-img"];

const h4BottomContent = document.querySelectorAll(".bottom-content h4");
h4BottomContent[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4BottomContent[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4BottomContent[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const pBottomContent = document.querySelectorAll(".bottom-content p");
pBottomContent[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
pBottomContent[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
pBottomContent[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const iletisim = document.querySelectorAll(".contact h4");
iletisim[0].textContent = siteContent["iletisim"]["iletişim-h4"];

const pContact = document.querySelectorAll(".contact p");
pContact[0].textContent = siteContent["iletisim"]["adres"];
pContact[1].textContent = siteContent["iletisim"]["telefon"];
pContact[2].textContent = siteContent["iletisim"]["email"];

const foot = document.querySelector("footer a");
foot.textContent = siteContent["footer"]["copyright"];
foot.classList.add("bold");