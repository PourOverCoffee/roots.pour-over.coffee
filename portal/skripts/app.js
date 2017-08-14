/**
 * (c) EIKONA AG, it.x informationssysteme gmbh, Alle Rechte vorbehalten.
 *
 * Application setup
 */
define(['jquery', 'config', 'require', 'bootstrap', 'modernizr'], function ($j, cyconConfig, require)
{
	return (function ()
	{
		/**#@+
		 * Scope.
		 */
		var _strScope = '';
		/**#@-*/

		/**
		 * Initialize the app.
		 */
		var initialize = function ()
		{
			// Document ready.
			$j(document).ready(_initModules);
		};

		/**
		 * Refresh the app.
		 *
		 * @param strScope - Scope for refreshing all modules.
		 */
		var refresh = function (strScope)
		{
			// Set the scope.
			_strScope = strScope;

			// Initialize modules.
			_initModules();
		};

		/**
		 * Initialize modules.
		 */
		var _initModules = function ()
		{
			// Handle project configuration.
			$j.each(cyconConfig, function (name, config)
			{
				var items = $j(_strScope + ' [data-cycon-module*=\'' + name + '\']');

				if (items.length)
				{
					require([config.module + '.min'], function (module)
					{
						module.initModule(items, config.options);
					});
				}
			});
			
			require(['animation/bodymovin'], function(bodymovin){

				var el = document.getElementById('bodymovin');

				var isElementInViewport = function () {
					return true;
				};

				function onVisibilityChange(el, callback) {
					var old_visible;
					return function () {
						var visible = isElementInViewport(el);
						if (visible != old_visible) {
							old_visible = visible;
							if (typeof callback == 'function') {
								callback();
							}
						}
					}
				}

				var handler = onVisibilityChange(el, function() {
					var params = {
						container: el,
						renderer: 'svg',
						loop: true,
						autoplay: true,
						path: "portal/skripts/animation/data.json"
					};

					if (anim === null && isElementInViewport() == true)
					{

						anim = bodymovin.loadAnimation(params);

						anim.addEventListener('loopComplete', function (e)
						{
							anim.goToAndPlay(90, true);
						});
					}

				});

				if (window.addEventListener) {
					addEventListener('DOMContentLoaded', handler, false);
					addEventListener('load', handler, false);
					addEventListener('scroll', handler, false);
					addEventListener('resize', handler, false);
				} else if (window.attachEvent)  {
					attachEvent('onDOMContentLoaded', handler); // IE9+ :(
					attachEvent('onload', handler);
					attachEvent('onscroll', handler);
					attachEvent('onresize', handler);
				}

				var anim = null;
			});
		};

		// Public parameters and functions
		return {
			initialize : initialize,
			refresh    : refresh
		}
	})();
});
