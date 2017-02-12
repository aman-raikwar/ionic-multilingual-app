angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'app.Auth', 'pascalprecht.translate', 'ngPDFViewer'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        $rootScope.lang = 'hi';
        $rootScope.userData = undefined;
    });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider
        .state('intro', {
            url: '/',
            templateUrl: 'templates/intro.html',
            controller: 'IntroCtrl'
        })
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.playlists', {
            url: '/playlists',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlists.html',
                    controller: 'PlaylistsCtrl'
                }
            }
        })
        .state('app.single', {
            url: '/playlists/:playlistId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlist.html',
                    controller: 'PlaylistCtrl'
                }
            }
        })
        .state('app.singleView', {
            url: '/playlists/:playlistId/:catId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/single-view.html',
                    controller: 'SingleViewCtrl'
                }
            }
        })
        .state('app.signup', {
            url: '/signup',
            views: {
                'menuContent': {
                    templateUrl: 'templates/signup.html',
                    controller: 'SignUpCtrl'
                }
            }
        })
        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                }
            }
        })
        .state('app.forgotpassword', {
            url: '/forgot-password',
            views: {
                'menuContent': {
                    templateUrl: 'templates/forgotpassword.html'
                }
            }
        })
        .state('app.profile', {
            url: '/profile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile.html',
                    controller: 'ProfileCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

    for (lang in translations) {
        $translateProvider.translations(lang, translations[lang]);
    }

    $translateProvider.preferredLanguage("hi");
    $translateProvider.fallbackLanguage("hi");
    //$rootScope.lang = 'en';
});
