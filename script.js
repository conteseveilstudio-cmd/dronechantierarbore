// Menu mobile
const bouton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (bouton && menu) {
  bouton.addEventListener('click', () => {
    const ouvert = menu.classList.toggle('ouvert');
    bouton.setAttribute('aria-expanded', ouvert);
  });
}
// Année dans le pied de page
document.querySelectorAll('.annee').forEach(e => e.textContent = new Date().getFullYear());
// Vidéos YouTube : chargées seulement au clic (page plus rapide)
document.querySelectorAll('.video').forEach(v => {
  v.querySelector('button').addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + v.dataset.id + '?autoplay=1&rel=0';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.title = v.querySelector('figcaption').textContent;
    v.querySelector('button').replaceWith(f);
  });
});
