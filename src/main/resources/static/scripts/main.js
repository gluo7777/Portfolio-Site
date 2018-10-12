define(function() {
	// versioning
	var jqueryVersion = '3.3.1';
	var bootstrapVersion = '4.1.3';

	// configure primary and fallbacks routes
	requirejs.config({
		enforceDefine: true,
		appDir: '.',
		baseUrl: 'scripts',
		paths: {
			'jquery':['https://code.jquery.com/jquery-' + jqueryVersion + '.slim.min','lib/jquery-'+jqueryVersion],
			'bootstrap': ['https://stackpath.bootstrapcdn.com/bootstrap/'+bootstrapVersion+'/js/bootstrap.bundle','lib/bootstrap-'+bootstrapVersion+'']
		}
	});

	// load required modules
	requirejs(['jquery'], function($) {
		$(document).ready(function(event) {
			console.log('jquery-%s.js loaded successfully.',jqueryVersion);
		});
		requirejs(['bootstrap'], function(bootstrap) {
			if(bootstrap !== null){
				console.log('%s loaded successfully.','bootstrap-'+bootstrapVersion+'.js');
			}
		});
	});
});