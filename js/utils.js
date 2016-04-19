// utils.js

var VRUtil = {

  isVRBrowser: function() {
    var UA = window.navigator.userAgent;
    // current only one VR browser
    // Samsung Internet which contains 'VR' in UA
    return UA.indexOf('VR') !== -1;
  },

  isWebVrApiPresent: function() {
    return !! window.navigator.getVRDevices || !! window.navigator.getVRDisplays;
  },

  isLatestApi: function() {
    return !! window.navigator.getVRDisplays;
  }

};
