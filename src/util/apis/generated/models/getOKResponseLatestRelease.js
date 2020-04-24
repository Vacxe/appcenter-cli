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
 * Class representing a GetOKResponseLatestRelease.
 */
class GetOKResponseLatestRelease {
  /**
   * Create a GetOKResponseLatestRelease.
   * @property {string} [targetBinaryRange]
   * @property {string} [description]
   * @property {boolean} [isDisabled]
   * @property {boolean} [isMandatory]
   * @property {number} [rollout]
   * @property {string} [label]
   * @property {string} [packageHash]
   * @property {string} [blobUrl]
   * @property {object} [diffPackageMap]
   * @property {string} [originalDeployment] Set on 'Promote'
   * @property {string} [originalLabel] Set on 'Promote' and 'Rollback'
   * @property {string} [releasedBy]
   * @property {string} [releaseMethod] The release method is unknown if
   * unspecified. Possible values include: 'Upload', 'Promote', 'Rollback'
   * @property {number} [size]
   * @property {number} [uploadTime]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetOKResponseLatestRelease
   *
   * @returns {object} metadata of GetOKResponseLatestRelease
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetOKResponse_latest_release',
      type: {
        name: 'Composite',
        className: 'GetOKResponseLatestRelease',
        modelProperties: {
          targetBinaryRange: {
            required: false,
            serializedName: 'target_binary_range',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          isDisabled: {
            required: false,
            serializedName: 'is_disabled',
            type: {
              name: 'Boolean'
            }
          },
          isMandatory: {
            required: false,
            serializedName: 'is_mandatory',
            type: {
              name: 'Boolean'
            }
          },
          rollout: {
            required: false,
            serializedName: 'rollout',
            constraints: {
              InclusiveMaximum: 100,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          packageHash: {
            required: false,
            serializedName: 'package_hash',
            type: {
              name: 'String'
            }
          },
          blobUrl: {
            required: false,
            serializedName: 'blob_url',
            type: {
              name: 'String'
            }
          },
          diffPackageMap: {
            required: false,
            serializedName: 'diff_package_map',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'GetOKResponseLatestReleaseDiffPackageMapValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetOKResponseLatestReleaseDiffPackageMapValue'
                  }
              }
            }
          },
          originalDeployment: {
            required: false,
            serializedName: 'original_deployment',
            type: {
              name: 'String'
            }
          },
          originalLabel: {
            required: false,
            serializedName: 'original_label',
            type: {
              name: 'String'
            }
          },
          releasedBy: {
            required: false,
            serializedName: 'released_by',
            type: {
              name: 'String'
            }
          },
          releaseMethod: {
            required: false,
            serializedName: 'release_method',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          uploadTime: {
            required: false,
            serializedName: 'upload_time',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GetOKResponseLatestRelease;
