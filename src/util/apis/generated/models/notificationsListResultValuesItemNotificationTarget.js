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
 * Type of Notification target (audiences, devices, user ids, account ids or
 * broadcast). The object must include the correct properties for the specified
 * target type except for broadcast.
 *
 */
class NotificationsListResultValuesItemNotificationTarget {
  /**
   * Create a NotificationsListResultValuesItemNotificationTarget.
   * @property {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationsListResultValuesItemNotificationTarget
   *
   * @returns {object} metadata of NotificationsListResultValuesItemNotificationTarget
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationsListResult_valuesItem_notification_target',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'NotificationsListResultValuesItemNotificationTarget',
        className: 'NotificationsListResultValuesItemNotificationTarget',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationsListResultValuesItemNotificationTarget;
