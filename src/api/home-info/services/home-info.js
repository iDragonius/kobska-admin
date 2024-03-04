'use strict';

/**
 * home-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-info.home-info');
