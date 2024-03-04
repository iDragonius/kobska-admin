'use strict';

/**
 * kiv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kiv.kiv');
