var app = angular.module('caffeinehit', [
	'ionic',
	'caffeinehit.controllers',
	'caffeinehit.services',
	'caffeinehit.filters',
    'ngCordova'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDarkContent();
		}
	});
});

app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common['Authorization'] = 'Token 227b5374aae1b8853f2e4068e99eda4584f4555a';
});