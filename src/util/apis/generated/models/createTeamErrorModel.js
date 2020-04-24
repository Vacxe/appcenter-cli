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
 * Class representing a CreateTeamErrorModel.
 */
class CreateTeamErrorModel {
  /**
   * Create a CreateTeamErrorModel.
   * @property {object} error
   * @property {string} [error.code] Possible values include: 'BadRequest',
   * 'Conflict', 'NotAcceptable', 'NotFound', 'InternalServerError',
   * 'Unauthorized', 'TooManyRequests'
   * @property {string} [error.message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateTeamErrorModel
   *
   * @returns {object} metadata of CreateTeamErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateTeamErrorModel',
      type: {
        name: 'Composite',
        className: 'CreateTeamErrorModel',
        modelProperties: {
          error: {
            required: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'CreateTeamErrorModelError'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateTeamErrorModel;
