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
 * Class representing a GetLocationForbiddenResponse.
 */
class GetLocationForbiddenResponse {
  /**
   * Create a GetLocationForbiddenResponse.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetLocationForbiddenResponse
   *
   * @returns {object} metadata of GetLocationForbiddenResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetLocationForbiddenResponse',
      type: {
        name: 'Composite',
        className: 'GetLocationForbiddenResponse',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetLocationForbiddenResponse;
