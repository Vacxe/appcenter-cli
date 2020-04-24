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
 * Class representing a ErrorSearchErrorModel.
 */
class ErrorSearchErrorModel {
  /**
   * Create a ErrorSearchErrorModel.
   * @property {object} error
   * @property {string} [error.code] Possible values include: 'BadRequest',
   * 'Conflict', 'NotAcceptable', 'NotFound', 'InternalServerError',
   * 'Unauthorized', 'TooManyRequests'
   * @property {string} [error.message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorSearchErrorModel
   *
   * @returns {object} metadata of ErrorSearchErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorSearchErrorModel',
      type: {
        name: 'Composite',
        className: 'ErrorSearchErrorModel',
        modelProperties: {
          error: {
            required: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ErrorSearchErrorModelError'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorSearchErrorModel;
