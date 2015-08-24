/**
 * Created by mohibwasay on 8/24/15.
 */



var camera = angular.module('camera', ['ngCordova']);


function CameraCtrl($scope) {
    $scope.fromCameraCtrl = "Hello World from Camera Ctrl";
}

function CameraService($cordovaCamera) {
    return {
        DeviceReady: function() {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });
        }
    }
}

camera.run(function($rootScope, CameraService){
    var event = 'deviceready';
    document.addEventListener(event, CameraService.DeviceReady(), true);
});


camera.controller('CameraCtrl', CameraCtrl);
camera.factory('CameraService', CameraService);

