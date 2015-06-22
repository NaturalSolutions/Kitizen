/**

Model Taxon

**/
define(['jquery', 'underscore', 'backbone','config'],
	function($, _ , Backbone, config){

	'use strict';

	return Backbone.Model.extend({
		defaults: {
			vernacularName : 'test',
			synonyms: [],
			scientificName: '',
			description: '',
			url: config.coreUrl,
		},
	});

});
