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
 * @summary Subscription
  *
 * Subscription information
 *
 */
class GetSubscriptionsOKResponse {
  /**
   * Create a GetSubscriptionsOKResponse.
   * @property {string} [startsAt] The date the subscription began
   * @property {string} [endsAt] The date the subscription will end or ended
   * @property {number} [daysLeft] The number of days left in the subscription
   * @property {object} [tier] Subscription Tier.
   * @property {string} [tier.name] The name of the tier
   * @property {boolean} [active] Is the subscription currently active?
   * @property {uuid} [id] Id of the subscription
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetSubscriptionsOKResponse
   *
   * @returns {object} metadata of GetSubscriptionsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetSubscriptionsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetSubscriptionsOKResponse',
        modelProperties: {
          startsAt: {
            required: false,
            serializedName: 'startsAt',
            type: {
              name: 'String'
            }
          },
          endsAt: {
            required: false,
            serializedName: 'endsAt',
            type: {
              name: 'String'
            }
          },
          daysLeft: {
            required: false,
            serializedName: 'daysLeft',
            type: {
              name: 'Number'
            }
          },
          tier: {
            required: false,
            serializedName: 'tier',
            type: {
              name: 'Composite',
              className: 'GetSubscriptionsOKResponseTier'
            }
          },
          active: {
            required: false,
            serializedName: 'active',
            type: {
              name: 'Boolean'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetSubscriptionsOKResponse;
