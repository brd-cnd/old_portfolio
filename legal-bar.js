/*
 * legal-bar.js
 * ---------------------------------------------------------------------------
 * Petit footer noir et blanc, injecté à la fin de chaque page sur laquelle ce
 * script est inclus. Il propose deux liens :
 *   - un retour vers le site greenbeans actuel
 *   - un accès direct aux mentions légales de ce site
 *
 * Contrairement à une version précédente, ce n'est plus un bandeau flottant
 * (position:fixed) : c'est un <footer> normal, inséré à la fin du <body>,
 * dans le flux du document. Il est donc toujours visible (en bas de page),
 * n'a pas de bouton de fermeture, et n'a pas besoin de décaler le contenu
 * avec un padding-bottom artificiel.
 *
 * Utilisation : ajouter, juste avant </body>, sur chaque page HTML :
 *   <script src="assets/js/legal-bar.js"></script>
 *
 * Aucune dépendance, aucun fichier CSS externe requis : le style est injecté
 * par le script lui-même.
 * ---------------------------------------------------------------------------
 */
(function () {
  function inject() {
    var css =
      '.gb-legalbar{display:flex;align-items:center;justify-content:space-between;' +
        'gap:16px;flex-wrap:wrap;padding:14px 16px;background:#ffffff;color:#111111;' +
        'border-top:1px solid #111111;' +
        'font:13px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;}' +
      '.gb-legalbar p{margin:0;color:#555555;}' +
      '.gb-legalbar nav{display:flex;gap:18px;align-items:center;flex-wrap:wrap;}' +
      '.gb-legalbar a{color:#111111;text-decoration:none;border-bottom:1px solid #111111;padding-bottom:1px;}' +
      '.gb-legalbar a:hover{opacity:.6;}';

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('footer');
    bar.className = 'gb-legalbar';
    bar.innerHTML =
      '<p>Cet ancien portfolio n\u2019est plus mis \u00e0 jour.</p>' +
      '<nav>' +
        '<a href="https://brd-cnd.github.io/greenbeans/home.html">Voir greenbeans \u2192</a>' +
        '<a href="mentions-legales.html">Mentions l\u00e9gales</a>' +
      '</nav>';

    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
