/**
 * (c) EIKONA AG, it.x informationssysteme gmbh, Alle Rechte vorbehalten.
 *
 * Require.js setup
 */
requirejs.config({
	baseUrl    : 'portal/skripts',
	paths      : {
		'jquery'     : [
			'https://code.jquery.com/jquery-1.11.3.min',
			'lib/jquery/jquery-1.11.3.min'
		],
		'jquery-ui'  : 'lib/jquery-ui/jquery-ui.min',
		'bootstrap'  : [
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
			'lib/bootstrap/bootstrap.min'
		],
		'modernizr'  : 'lib/modernizr/modernizr-2.8.3-respond-1.4.2.min',
		'googlemaps' : 'lib/googlemaps-amd/googlemaps',
		'async'      : 'lib/requirejs/async'
	},
	shim    : {
		'animation/params' : {
			deps: [
				'animation/bodymovin'
			]
		}
	},
	bundles    : {
		'cycon/utils.min' : ['cycon-module']
	},
	googlemaps : {
		params : {
			v      : '3.19',
			sensor : false
		}
	}
});

require(['app'], function(app)
{
	app.initialize();
});
