function loadFragment(name) {
	// Reconstruction du chemin du fragment sur le serveur
	var urlToLoad = 'includes/' + name + '.php';
	$.get(urlToLoad, null, processNewContent);

	function processNewContent(newContent) {
		// Afficher le nouveau contenu
		$('#detail').html(newContent);
	}
}

$(document).ready(
	function() {
		$('nav a').click(
			function(event) {
				// On empêche la requête HTTP de se produire
				event.preventDefault();
				var link = $(this).attr('href');
				loadFragment(link);
			}
		);
	}
)