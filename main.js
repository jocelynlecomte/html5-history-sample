function loadFragment(name) {
	if (!name) {
		name = 'home';
	}

	// Reconstruction du chemin du fragment sur le serveur
	var urlToLoad = 'includes/' + name + '.php';
	$.get(urlToLoad, null, processNewContent);


	function processNewContent(newContent) {
		// Afficher le nouveau contenu
		$('#detail').html(newContent);
		// Modifier le titre du document pour pouvoir identifier les différents états
		document.title = 'Plus d\'infos sur: ' + $('#detail').find('h2').html();
	}
}

function getFragmentName() {
	var pathname = window.location.pathname;
	var start = pathname.lastIndexOf("/");
	var fragmentName = pathname.slice(start + 1);
	return fragmentName;
}

$(document).ready(
	function() {
		// Au premier chargement, remplacement de l'état null par l'état approprié
		var landingPage = getFragmentName();
		if (!landingPage) {
			landingPage = 'home';
		}
		window.history.replaceState({ link: landingPage }, '', landingPage);

		// Chargement du contenu approprié quand on navigue dans l'historique
		$(window).bind('popstate',  
			function(event) {
				if (event.originalEvent.state) {
					loadFragment(event.originalEvent.state.link);
				}
			});
		// transformation des liens de navigation en hashtags
		$('nav a').click(
			function(event) {
				event.preventDefault();
				var url = $(this).attr('href');
				loadFragment(url);
				window.history.pushState({ link: url }, '', url);
			}
		);
	}
)