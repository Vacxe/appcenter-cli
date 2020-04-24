/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeviceModel.
 */
class DeviceModel {
  /**
   * Create a DeviceModel.
   * @property {string} [name]
   * @property {string} [manufacturer]
   * @property {string} [model]
   * @property {string} [platform]
   * @property {object} [dimensions] Physical device dimensions
   * @property {object} [dimensions.depth]
   * @property {object} [dimensions.height]
   * @property {object} [dimensions.width]
   * @property {object} [resolution] Device screen resolution
   * @property {string} [resolution.height]
   * @property {string} [resolution.width]
   * @property {string} [resolution.ppi]
   * @property {string} [releaseDate]
   * @property {string} [formFactor]
   * @property {object} [screenSize] Physical device screen dimensions
   * @property {string} [screenSize.cm]
   * @property {string} [screenSize.inProperty]
   * @property {object} [cpu] CPU data for device
   * @property {string} [cpu.frequency]
   * @property {string} [cpu.core]
   * @property {string} [cpu.text]
   * @property {object} [memory] Memory data for device
   * @property {string} [memory.formattedSize]
   * @property {number} [screenRotation]
   * @property {object} [deviceFrame]
   * @property {object} [deviceFrame.grid]
   * @property {number} [deviceFrame.grid.width]
   * @property {number} [deviceFrame.grid.height]
   * @property {string} [deviceFrame.grid.frameUrl]
   * @property {array} [deviceFrame.grid.screen]
   * @property {object} [deviceFrame.full]
   * @property {number} [deviceFrame.full.width]
   * @property {number} [deviceFrame.full.height]
   * @property {string} [deviceFrame.full.frameUrl]
   * @property {array} [deviceFrame.full.screen]
   * @property {number} [availabilityCount]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceModel
   *
   * @returns {object} metadata of DeviceModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceModel',
      type: {
        name: 'Composite',
        className: 'DeviceModel',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          manufacturer: {
            required: false,
            serializedName: 'manufacturer',
            type: {
              name: 'String'
            }
          },
          model: {
            required: false,
            serializedName: 'model',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: false,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Composite',
              className: 'DeviceModelDimensions'
            }
          },
          resolution: {
            required: false,
            serializedName: 'resolution',
            type: {
              name: 'Composite',
              className: 'DeviceModelResolution'
            }
          },
          releaseDate: {
            required: false,
            serializedName: 'releaseDate',
            type: {
              name: 'String'
            }
          },
          formFactor: {
            required: false,
            serializedName: 'formFactor',
            type: {
              name: 'String'
            }
          },
          screenSize: {
            required: false,
            serializedName: 'screenSize',
            type: {
              name: 'Composite',
              className: 'DeviceModelScreenSize'
            }
          },
          cpu: {
            required: false,
            serializedName: 'cpu',
            type: {
              name: 'Composite',
              className: 'DeviceModelCpu'
            }
          },
          memory: {
            required: false,
            serializedName: 'memory',
            type: {
              name: 'Composite',
              className: 'DeviceModelMemory'
            }
          },
          screenRotation: {
            required: false,
            serializedName: 'screenRotation',
            type: {
              name: 'Number'
            }
          },
          deviceFrame: {
            required: false,
            serializedName: 'deviceFrame',
            type: {
              name: 'Composite',
              className: 'DeviceModelDeviceFrame'
            }
          },
          availabilityCount: {
            required: false,
            serializedName: 'availabilityCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceModel;
