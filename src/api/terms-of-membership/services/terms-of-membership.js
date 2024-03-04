'use strict';

/**
 * terms-of-membership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::terms-of-membership.terms-of-membership');
