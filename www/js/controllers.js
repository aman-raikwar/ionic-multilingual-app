angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $translate, $ionicPopover, $rootScope, Listings) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    //$scope.loginData = {};

    // // Create the login modal that we will use later
    // $ionicModal.fromTemplateUrl('templates/login.html', {
    //     scope: $scope
    // }).then(function(modal) {
    //     $scope.modal = modal;
    // });

    // Triggered in the login modal to close it
    // $scope.closeLogin = function() {
    //     $scope.modal.hide();
    // };

    // Open the login modal
    // $scope.login = function() {
    //     $scope.modal.show();
    // };

    // Open the register modal
    // $scope.register = function() {
    //     $scope.modal.show();
    // };

    // Perform the login action when the user submits the login form
    // $scope.doLogin = function() {
    //     console.log('Doing login', $scope.loginData);

    //     // Simulate a login delay. Remove this and replace with your login
    //     // code if using a login system
    //     $timeout(function() {
    //         $scope.closeLogin();
    //     }, 1000);
    // };

    $scope.ChangeLanguage = function(lang) {
        console.log('Language:', lang);
        $translate.use(lang);
        $scope.closePopover();
        $rootScope.lang = lang;
    }

    $scope.playlists = Listings.getAll();

    $ionicPopover.fromTemplateUrl('templates/change-language.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });

    $scope.$on('$ionicView.enter', function(e) {
        $rootScope.userData = undefined;
    });

    $scope.logout = function() {
        $rootScope.userData = undefined;
        $state.go('app.playlists');
    }
})

.controller('PlaylistsCtrl', function($scope, $translate, Listings) {
    $scope.playlists = Listings.getAll();

    $scope.options = {
        loop: true,
        effect: 'slide',
        speed: 600,
        autoplay: 2000
    };

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
        // note: the indexes are 0-based
        $scope.activeIndex = data.slider.activeIndex;
        $scope.previousIndex = data.slider.previousIndex;
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams, $state, Listings) {
    if ($stateParams.playlistId != '' && $stateParams.playlistId != undefined) {
        var id = $stateParams.playlistId;
        $scope.playlist = Listings.getSingle(id);

    } else {
        $state.go('app.playlists');
    }
})

.controller('SingleViewCtrl', ['$scope', '$stateParams', '$state', '$ionicModal', 'PDFViewerService', function($scope, $stateParams, $state, $ionicModal, pdf) {
    if (($stateParams.playlistId != '' && $stateParams.playlistId != undefined) && ($stateParams.catId != '' && $stateParams.catId != undefined)) {
        var id = $stateParams.playlistId;
        var catid = $stateParams.catId;
        //$scope.single = Listings.getRec(id, catid);
        $scope.single = {
            title: {
                'en': 'Table',
                'hi': 'मेज'
            },
            subtitle: catid,
            id: 1
        };

        $scope.viewer = pdf.Instance("viewer");

        $scope.nextPage = function() {
            $scope.viewer.nextPage();
        };

        $scope.prevPage = function() {
            $scope.viewer.prevPage();
        };

        $scope.pageLoaded = function(curPage, totalPages) {
            $scope.currentPage = curPage;
            $scope.totalPages = totalPages;
        };
    } else {
        $state.go('app.playlists');
    }

    $ionicModal.fromTemplateUrl('templates/view-specification.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.SpecificationModal = modal;
    });

    $scope.closeSpecificationModal = function() {
        $scope.SpecificationModal.hide();
    };

    $scope.showSpecificationModal = function() {
        $scope.SpecificationModal.show();
    };

    $ionicModal.fromTemplateUrl('templates/view-technical-specification.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.TechnicalSpecificationModal = modal;
    });

    $scope.closeTechnicalSpecificationModal = function() {
        $scope.TechnicalSpecificationModal.hide();
    };

    $scope.showTechnicalSpecificationModal = function() {
        $scope.TechnicalSpecificationModal.show();
    };

    $ionicModal.fromTemplateUrl('templates/view-pdf.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.ManualInstallationPDFModal = modal;
    });

    $scope.closeManualInstallationPDFModal = function() {
        $scope.ManualInstallationPDFModal.hide();
    };

    $scope.showManualInstallationPDFModal = function() {
        $scope.ManualInstallationPDFModal.show();
    };

    $ionicModal.fromTemplateUrl('templates/view-xls.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.ManualInstallationXLSModal = modal;
    });

    $scope.closeManualInstallationXLSModal = function() {
        $scope.ManualInstallationXLSModal.hide();
    };

    $scope.showManualInstallationXLSModal = function() {
        $scope.ManualInstallationXLSModal.show();
    };

    $ionicModal.fromTemplateUrl('templates/view.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.ManualInstallationModal = modal;
    });

    $scope.closeManualInstallationModal = function() {
        $scope.ManualInstallationModal.hide();
    };

    $scope.showManualInstallationModal = function() {
        $scope.ManualInstallationModal.show();
    };

    $scope.$on('$destroy', function() {
        $scope.SpecificationModal.remove();
        $scope.TechnicalSpecificationModal.remove();
        $scope.ManualInstallationPDFModal.remove();
        $scope.ManualInstallationXLSModal.remove();
        $scope.ManualInstallationModal.remove();
    });
}])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
    // Called to navigate to the main app
    $scope.startApp = function() {
        $state.go('app.playlists');
    };
    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
})
