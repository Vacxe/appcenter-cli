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
 * Class representing a GetReleasesContainer.
 */
class GetReleasesContainer {
  /**
   * Create a GetReleasesContainer.
   * @property {array} releases
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetReleasesContainer
   *
   * @returns {object} metadata of GetReleasesContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetReleasesContainer',
      type: {
        name: 'Composite',
        className: 'GetReleasesContainer',
        modelProperties: {
          releases: {
            required: true,
            serializedName: 'releases',
            constraints: {
              MinItems: 1
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetReleasesContainerReleasesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetReleasesContainerReleasesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetReleasesContainer;
