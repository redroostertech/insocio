mainApp.controller("RecordVideoController" , function ($scope) {
    // The scope of the controller
    // Declare properties & methods
    $scope.hasVideoStarted = false; 
    $scope.videoStream;

    function hasGetUserMedia () {
        return !!(navigator.mediaDevices &&
            navigator.mediaDevices.getUserMedia);
    }

    function stopVideo(callback) {
        $scope.videoStream.getTracks().forEach(track => track.stop());
        callback();
    }

    $scope.startCapturingVideo = function() {
        const videoDiv = document.getElementById("video-camera");

        if (!$scope.hasVideoStarted) {
            if (hasGetUserMedia()) {
                $scope.hasVideoStarted = true;

                var videoObj = document.createElement('video');
                videoObj.id = "video-object"
                videoObj.autoplay = true;

                videoDiv.appendChild(videoObj);
    
                const video = document.querySelector('video');
    
                const constraints = {
                    video: true,
                    audio: true
                };

                navigator.mediaDevices.getUserMedia(constraints).
                then((stream) => {
                    $scope.videoStream = stream;
                    video.srcObject = stream;
                });
    
            } else {
                alert('getUserMedia() is not supported by your browser');
            }
        } else {
            $scope.hasVideoStarted = false;
            const videoDiv = document.getElementById("video-object");
            stopVideo(function() {
                videoDiv.remove();
            })
        }
    }

});