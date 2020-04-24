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
 * A single symbol upload entity
 *
 */
class CompleteOKResponse {
  /**
   * Create a CompleteOKResponse.
   * @property {string} symbolUploadId The id for the current symbol upload
   * @property {string} appId The application that this symbol upload belongs
   * to
   * @property {object} [user] User information of the one who intitiated the
   * symbol upload
   * @property {string} [user.email] The email of the user
   * @property {string} [user.displayName] The full name of the user. Might for
   * example be first and last name
   * @property {string} status The current status for the symbol upload.
   * Possible values include: 'created', 'committed', 'aborted', 'processing',
   * 'indexed', 'failed'
   * @property {string} symbolType The type of the symbol for the current
   * symbol upload. Possible values include: 'Apple', 'JavaScript', 'Breakpad',
   * 'AndroidProguard', 'UWP'
   * @property {array} [symbolsUploaded] The symbols found in the upload. This
   * may be empty until the status is indexed
   * @property {string} [origin] The origin of the symbol upload. Possible
   * values include: 'User', 'System'
   * @property {string} [fileName] The file name for the symbol upload
   * @property {number} [fileSize] The size of the file in Mebibytes. This may
   * be 0 until the status is indexed
   * @property {date} [timestamp] When the symbol upload was committed, or last
   * transaction time if not committed
   */
  constructor() {
  }

  /**
   * Defines the metadata of CompleteOKResponse
   *
   * @returns {object} metadata of CompleteOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CompleteOKResponse',
      type: {
        name: 'Composite',
        className: 'CompleteOKResponse',
        modelProperties: {
          symbolUploadId: {
            required: true,
            serializedName: 'symbol_upload_id',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: true,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          user: {
            required: false,
            serializedName: 'user',
            type: {
              name: 'Composite',
              className: 'CompleteOKResponseUser'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          symbolType: {
            required: true,
            serializedName: 'symbol_type',
            type: {
              name: 'String'
            }
          },
          symbolsUploaded: {
            required: false,
            serializedName: 'symbols_uploaded',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CompleteOKResponseSymbolsUploadedItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'CompleteOKResponseSymbolsUploadedItem'
                  }
              }
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          fileName: {
            required: false,
            serializedName: 'file_name',
            type: {
              name: 'String'
            }
          },
          fileSize: {
            required: false,
            serializedName: 'file_size',
            type: {
              name: 'Number'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = CompleteOKResponse;
