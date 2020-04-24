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
 * Usage section in the Billing Information
 *
 */
class GetAllOKResponseAggregatedBillingsUsage {
  /**
   * Create a GetAllOKResponseAggregatedBillingsUsage.
   * @property {object} [buildService] Resource usage for a single Mobile
   * Center service
   * @property {object} [buildService.currentUsagePeriod] Usage for a single
   * period
   * @property {string} [buildService.currentUsagePeriod.startTime] Inclusive
   * start time of the usage period
   * @property {string} [buildService.currentUsagePeriod.endTime] Exclusive end
   * time of the usage period.
   * @property {object} [buildService.currentUsagePeriod.byAccount] A
   * collection of named numeric values
   * @property {object} [buildService.currentUsagePeriod.byApp] A collection of
   * named numeric values grouped by app
   * @property {object} [testService] Resource usage for a single Mobile Center
   * service
   * @property {object} [testService.currentUsagePeriod] Usage for a single
   * period
   * @property {string} [testService.currentUsagePeriod.startTime] Inclusive
   * start time of the usage period
   * @property {string} [testService.currentUsagePeriod.endTime] Exclusive end
   * time of the usage period.
   * @property {object} [testService.currentUsagePeriod.byAccount] A collection
   * of named numeric values
   * @property {object} [testService.currentUsagePeriod.byApp] A collection of
   * named numeric values grouped by app
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetAllOKResponseAggregatedBillingsUsage
   *
   * @returns {object} metadata of GetAllOKResponseAggregatedBillingsUsage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetAllOKResponse_aggregatedBillings_usage',
      type: {
        name: 'Composite',
        className: 'GetAllOKResponseAggregatedBillingsUsage',
        modelProperties: {
          buildService: {
            required: false,
            serializedName: 'buildService',
            type: {
              name: 'Composite',
              className: 'GetAllOKResponseAggregatedBillingsUsageBuildService'
            }
          },
          testService: {
            required: false,
            serializedName: 'testService',
            type: {
              name: 'Composite',
              className: 'GetAllOKResponseAggregatedBillingsUsageTestService'
            }
          }
        }
      }
    };
  }
}

module.exports = GetAllOKResponseAggregatedBillingsUsage;
