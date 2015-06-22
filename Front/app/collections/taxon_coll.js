/**

Collection taxon

**/
define(['jquery', 'underscore', 'backbone', 'models/taxon'],
	function($, _ ,Backbone, taxon){

	'use strict';

	return Backbone.Collection.extend({
		model: taxon,
	});

});