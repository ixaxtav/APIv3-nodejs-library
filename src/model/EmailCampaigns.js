/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EmailCampaignsRecipients', 'model/EmailCampaignsSender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailCampaignsRecipients'), require('./EmailCampaignsSender'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.EmailCampaigns = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.EmailCampaignsRecipients, root.SendinBlueApi.EmailCampaignsSender);
  }
}(this, function(ApiClient, EmailCampaignsRecipients, EmailCampaignsSender) {
  'use strict';




  /**
   * The EmailCampaigns model module.
   * @module model/EmailCampaigns
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EmailCampaigns</code>.
   * @alias module:model/EmailCampaigns
   * @class
   * @param name {String} Name of the campaign
   * @param subject {String} Subject of the campaign
   * @param type {module:model/EmailCampaigns.TypeEnum} Type of the campaign
   */
  var exports = function(name, subject, type) {
    var _this = this;



    _this['name'] = name;



    _this['subject'] = subject;







    _this['type'] = type;



  };

  /**
   * Constructs a <code>EmailCampaigns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailCampaigns} obj Optional instance to populate.
   * @return {module:model/EmailCampaigns} The populated <code>EmailCampaigns</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = EmailCampaignsSender.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('htmlUrl')) {
        obj['htmlUrl'] = ApiClient.convertToType(data['htmlUrl'], 'String');
      }
      if (data.hasOwnProperty('scheduledAt')) {
        obj['scheduledAt'] = ApiClient.convertToType(data['scheduledAt'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
      }
      if (data.hasOwnProperty('toField')) {
        obj['toField'] = ApiClient.convertToType(data['toField'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = EmailCampaignsRecipients.constructFromObject(data['recipients']);
      }
      if (data.hasOwnProperty('attachmentUrl')) {
        obj['attachmentUrl'] = ApiClient.convertToType(data['attachmentUrl'], 'String');
      }
      if (data.hasOwnProperty('inlineImageActivation')) {
        obj['inlineImageActivation'] = ApiClient.convertToType(data['inlineImageActivation'], 'Boolean');
      }
      if (data.hasOwnProperty('mirrorActive')) {
        obj['mirrorActive'] = ApiClient.convertToType(data['mirrorActive'], 'Boolean');
      }
      if (data.hasOwnProperty('recurring')) {
        obj['recurring'] = ApiClient.convertToType(data['recurring'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('footer')) {
        obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }
      if (data.hasOwnProperty('utmCampaign')) {
        obj['utmCampaign'] = ApiClient.convertToType(data['utmCampaign'], 'String');
      }
    }
    return obj;
  }

  /**
   * Tag of the campaign
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {module:model/EmailCampaignsSender} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Name of the campaign
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Mandatory if htmlUrl is empty. Body of the message (HTML)
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * Mandatory if htmlContent is empty. Url to the message (HTML)
   * @member {String} htmlUrl
   */
  exports.prototype['htmlUrl'] = undefined;
  /**
   * Sending date and time (YYYY-MM-DD HH:mm:ss)
   * @member {String} scheduledAt
   */
  exports.prototype['scheduledAt'] = undefined;
  /**
   * Subject of the campaign
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Email on which the campaign recipients will be able to reply to
   * @member {String} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * To personalize the «To» Field, e.g. if you want to include the first name and last name of your recipient, use [FNAME] [LNAME]. These attributes must already exist in your contact database
   * @member {String} toField
   */
  exports.prototype['toField'] = undefined;
  /**
   * @member {module:model/EmailCampaignsRecipients} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * Absolute url of the attachment (no local file). Extensions allowed xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff and rtf
   * @member {String} attachmentUrl
   */
  exports.prototype['attachmentUrl'] = undefined;
  /**
   * Use true to embedded the images in your email. Final size of the email should be less than 4MB. Campaigns with embedded images can not be sent to more than 5000 contacts
   * @member {Boolean} inlineImageActivation
   * @default false
   */
  exports.prototype['inlineImageActivation'] = false;
  /**
   * Use true to enable the mirror link
   * @member {Boolean} mirrorActive
   */
  exports.prototype['mirrorActive'] = undefined;
  /**
   * For trigger campagins use false to make sure a contact receives the same campaign only once
   * @member {Boolean} recurring
   * @default false
   */
  exports.prototype['recurring'] = false;
  /**
   * Type of the campaign
   * @member {module:model/EmailCampaigns.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Footer of the email campaign
   * @member {String} footer
   */
  exports.prototype['footer'] = undefined;
  /**
   * Header of the email campaign
   * @member {String} header
   */
  exports.prototype['header'] = undefined;
  /**
   * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
   * @member {String} utmCampaign
   */
  exports.prototype['utmCampaign'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "classic"
     * @const
     */
    "classic": "classic",
    /**
     * value: "trigger"
     * @const
     */
    "trigger": "trigger"  };


  return exports;
}));


