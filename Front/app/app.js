define(['marionette', 'lyt-rootview', 'router', 'controller', 'models/taxon','collections/taxon_coll'],
function(Marionette, Lyt_rootview, Router, Controller, Model, Collection) {


	var app = {}, JST = window.JST = window.JST || {};

	Backbone.Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};

	app = new Marionette.Application();

	app.on('start', function() {
		app.rootView = new Lyt_rootview();
		app.rootView.render();
		app.controller = new Controller({app : app});
		app.router = new Router({controller: app.controller, app: app});

		app.model = new Model();
		app.collection = new Collection();

		Backbone.history.start();
	});

	$( document ).ajaxStart(function(e) {
		$('#header-loader').removeClass('hidden');
	});
	$( document ).ajaxStop(function() {
		$('#header-loader').addClass('hidden');
	});

	return app;
});
