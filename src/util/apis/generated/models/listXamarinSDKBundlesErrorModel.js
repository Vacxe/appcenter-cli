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
 * Class representing a ListXamarinSDKBundlesErrorModel.
 */
class ListXamarinSDKBundlesErrorModel {
  /**
   * Create a ListXamarinSDKBundlesErrorModel.
   * @property {string} id
   * @property {string} code
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListXamarinSDKBundlesErrorModel
   *
   * @returns {object} metadata of ListXamarinSDKBundlesErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListXamarinSDKBundlesErrorModel',
      type: {
        name: 'Composite',
        className: 'ListXamarinSDKBundlesErrorModel',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
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

module.exports = ListXamarinSDKBundlesErrorModel;
