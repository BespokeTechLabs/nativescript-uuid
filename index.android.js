var device;
try {
    device = require("@nativescript/core/platform").device;
} catch (e) {
    device = require('tns-core-modules/platform/platform').device;  
}

function getUUID() {
  return device ? device.uuid : "";
}

exports.getUUID = getUUID;
