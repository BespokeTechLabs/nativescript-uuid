var device = require("@nativescript/core/platform").device;

function getUUID() {
  return device ? device.uuid : "";
}

exports.getUUID = getUUID;
