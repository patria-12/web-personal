
// Navbar fix

window.onscroll = function (){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset>fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};



// Hambueger

const hambuerger = document.querySelector('#hambuerger');
const navMenu = document.querySelector('#nav-menu');


hambuerger.addEventListener('click',function(){
    hambuerger.classList.toggle('hambuerger-active');
    navMenu.classList.toggle('hidden');
});


// ubah gambar dino
 function gantiGambar() {
    const img = document.querySelector("#dino-img");

    // Tambahkan fade-out
    img.classList.remove("opacity-100");
    img.classList.add("opacity-0");

    // Tunggu animasi fade-out selesai, baru ganti gambar dan fade-in
    setTimeout(() => {
      if (img.src.includes("dino.png")) {
        img.src = "./img/dino-2.jpeg";
      } else {
        img.src = "./img/dino.png";
      }

      // Setelah gambar ganti, fade-in
      img.classList.remove("opacity-0");
      img.classList.add("opacity-100");
    }, 300); // waktunya disesuaikan dengan durasi fade-out (ms)
  };