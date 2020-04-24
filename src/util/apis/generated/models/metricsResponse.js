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
 * Class representing a MetricsResponse.
 */
class MetricsResponse {
  /**
   * Create a MetricsResponse.
   * @property {string} [databaseLocation] Possible values include: 'East
   * Asia', 'Southeast Asia', 'Australia Central', 'Australia Central 2',
   * 'Australia East', 'Australia Southeast', 'Brazil South', 'Canada Central',
   * 'Canada East', 'Central India', 'South India', 'West India', 'North
   * Europe', 'West Europe', 'France Central', 'France South', 'Germany
   * Central', 'Germany Northeast', 'Japan East', 'Japan West', 'Korea
   * Central', 'Korea South', 'South Africa North', 'South Africa West', 'UK
   * South', 'UK West', 'Central US', 'East US', 'East US 2', 'US Gov Arizona',
   * 'US Gov Texas', 'North Central US', 'South Central US', 'West US', 'West
   * US 2', 'West Central US'
   * @property {string} [accountName]
   * @property {string} [databaseId]
   * @property {object} [metrics] Represents database usage metrics.
   * @property {number} [metrics.interval]
   * @property {number} [metrics.totalRequests]
   * @property {number} [metrics.totalRequestUnits]
   * @property {number} [metrics.dataUsage]
   * @property {number} [metrics.indexUsage]
   * @property {object} [metrics.latencyMetrics]
   * @property {object} [metrics.latencyMetrics.readLatencyMetrics]
   * @property {string} [metrics.latencyMetrics.readLatencyMetrics.name]
   * @property {string} [metrics.latencyMetrics.readLatencyMetrics.unit]
   * @property {date} [metrics.latencyMetrics.readLatencyMetrics.startTime]
   * @property {date} [metrics.latencyMetrics.readLatencyMetrics.endTime]
   * @property {array} [metrics.latencyMetrics.readLatencyMetrics.metricValues]
   * @property {object} [metrics.latencyMetrics.writeLatencyMetrics]
   * @property {string} [metrics.latencyMetrics.writeLatencyMetrics.name]
   * @property {string} [metrics.latencyMetrics.writeLatencyMetrics.unit]
   * @property {date} [metrics.latencyMetrics.writeLatencyMetrics.startTime]
   * @property {date} [metrics.latencyMetrics.writeLatencyMetrics.endTime]
   * @property {array}
   * [metrics.latencyMetrics.writeLatencyMetrics.metricValues]
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricsResponse
   *
   * @returns {object} metadata of MetricsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricsResponse',
      type: {
        name: 'Composite',
        className: 'MetricsResponse',
        modelProperties: {
          databaseLocation: {
            required: false,
            serializedName: 'databaseLocation',
            type: {
              name: 'String'
            }
          },
          accountName: {
            required: false,
            serializedName: 'accountName',
            type: {
              name: 'String'
            }
          },
          databaseId: {
            required: false,
            serializedName: 'databaseId',
            type: {
              name: 'String'
            }
          },
          metrics: {
            required: false,
            serializedName: 'metrics',
            type: {
              name: 'Composite',
              className: 'MetricsResponseMetrics'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricsResponse;
