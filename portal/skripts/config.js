/**
 * (c) EIKONA AG, it.x informationssysteme gmbh, Alle Rechte vorbehalten.
 *
 * Project configuration
 */
define(function ()
{
	return {
		'suche-autocompleter'     : {
			'module'  : 'cycon/autocompleter',
			'options' : {
				url : Cycon.Suche.Suche.sucheVorschlaege.url
			}
		},
		'landkarte-autocompleter' : {
			'module'  : 'cycon/autocompleter',
			'options' : {
				url : Cycon.Landkarte.Landkarte.sucheOrt.url
			}
		},
		'element-tabs'            : {
			'module'  : 'cycon/tabaccordion',
			'options' : {
				useCase : 'tabs'
			}
		},
		'element-accordion'       : {
			'module'  : 'cycon/tabaccordion',
			'options' : {
				useCase : 'accordion'
			}
		},
		'element-slider'          : {
			'module' : 'cycon/slider'
		},
		'element-owl-carousel'      : {
			'module' : 'cycon/owl-carousel'
		},
		'element-slicknav'          : {
			'module' : 'cycon/slicknav'
		},
		'element-dialog'          : {
			'module' : 'cycon/dialog'
		},
		'element-message'         : {
			'module' : 'src/message'
		},
		'element-file'            : {
			'module' : 'cycon/file-upload'
		},
		'tooltip'                 : {
			'module' : 'cycon/tooltip'
		},
		'netpaper'                : {
			'module'  : 'cycon/netpaper',
			'options' : {
				Copyright               : 'Â© it.x informationssysteme gmbh',
				Key                     : 'lUiS8PY4dbDhL$PpMc',
				PageWidth               : 1200,
				PageHeight              : 1552,
				FullScreenEnabled       : 'true',
				MarginBottom            : 64,
				AutoScale               : 'true',
				FullScale               : 'true',
				Thumbnails              : 'true',
				ThumbnailsToFront       : 'true',
				ThumbnailsHidden        : 'true',
				ThumbnailAlwaysCentered : 'true',
				ThumbnailWidth          : 105,
				ThumbnailHeight         : 136,
				ControlbarFile          : 'portal/skripts/lib/pageflip/controlbar_svg.html',
				CenterSinglePage        : 'true'
			}
		},
		'googlemap'               : {
			'module' : 'cycon/googlemaps'
		},
		'datepicker'              : {
			'module'  : 'cycon/datetimepicker',
			'options' : {
				showTimepicker : 'false'
			}
		},
		'datetimepicker'          : {
			'module' : 'cycon/datetimepicker'
		},
		'timepicker'              : {
			'module'  : 'cycon/datetimepicker',
			'options' : {
				timeOnly : 'true'
			}
		},
		'image-placeholder'       : {
			'module' : 'cycon/image-placeholder'
		},
		'element-google-tag'      : {
			'module' : 'cycon/google-tag'
		}
	}
});