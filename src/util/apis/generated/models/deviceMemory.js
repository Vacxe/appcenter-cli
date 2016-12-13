/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DeviceMemory class.
 * @constructor
 * Memory data for device
 *
 * @member {string} [formattedSize]
 * 
 */
function DeviceMemory() {
}

/**
 * Defines the metadata of DeviceMemory
 *
 * @returns {object} metadata of DeviceMemory
 *
 */
DeviceMemory.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeviceMemory',
    type: {
      name: 'Composite',
      className: 'DeviceMemory',
      modelProperties: {
        formattedSize: {
          required: false,
          serializedName: 'formattedSize',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeviceMemory;
