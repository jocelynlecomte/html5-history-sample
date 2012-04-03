function loadFragment(name) {
	if (name) {
		// Reconstruction du chemin du fragment sur le serveur
		var urlToLoad = 'includes/' + name + '.php';
		$.get(urlToLoad, null, processNewContent);
	}
	else {
		// Pas de hash --> contenu vide de la page d'accueil
		processNewContent('');
	}

	function processNewContent(newContent) {
		// Afficher le nouveau contenu
		$('#detail').html(newContent);
	}
}

function getHashtagContent() {
	if (location.hash.length > 1) {
		return location.hash.slice(1);
	}
	else {
		return '';
	}
}

$(document).ready(
	function() {
		// Chargement du contenu approprié quand le hash est modifié
		$(window).bind('hashchange',
			function(event) {
				loadFragment(getHashtagContent());
			}
		);
		// transformation des liens de navigation en hashtags
		$('nav a').each(
			function(index) {
				var link = $(this).attr('href');
				$(this).attr('href', '#' + link);
			}
		);
		// Au premier chargement, si un hashtag est présent, charger le
		// contenu approprié
		if (getHashtagContent()) {
			loadFragment(getHashtagContent());
		}
	}
)