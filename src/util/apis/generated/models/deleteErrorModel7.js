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
 * Class representing a DeleteErrorModel7.
 */
class DeleteErrorModel7 {
  /**
   * Create a DeleteErrorModel7.
   * @property {string} code Possible values include: 'BadRequest', 'Conflict',
   * 'NotAcceptable', 'NotFound', 'InternalServerError', 'Unauthorized',
   * 'TooManyRequests'
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteErrorModel7
   *
   * @returns {object} metadata of DeleteErrorModel7
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteErrorModel',
      type: {
        name: 'Composite',
        className: 'DeleteErrorModel7',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
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

module.exports = DeleteErrorModel7;
