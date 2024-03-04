'use strict';

/**
 * become-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::become-member.become-member');
