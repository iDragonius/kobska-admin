'use strict';

/**
 * rules-of-procedure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rules-of-procedure.rules-of-procedure');
