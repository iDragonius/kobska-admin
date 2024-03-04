'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
    register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: `
            type Query {
              news(slug: String!): NewsEntityResponse
            }
          `,
      resolvers: {
        Query: {
          news: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              const data = await strapi.db.query('api::news.news').findOne({
                where:{
                  slug:args.slug,
                  locale: args.locale
                }
              })


              return toEntityResponse(data);
            },
          },
        },
      },
    }));
    extensionService.use(({ strapi }) => ({
      typeDefs: `
            type Query {
              activity(slug: String!): ActivityEntityResponse
            }
          `,
      resolvers: {
        Query: {
          activity: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              const data = await strapi.db.query('api::activity.activity').findOne({
                where:{
                  slug:args.slug,
                  locale: args.locale
                }
              })


              return toEntityResponse(data);
            },
          },
        },
      },
    }));
    //    extensionService.use(({ strapi }) => ({
    //   typeDefs: `
    //         type Query {
    //           member(slug: String!): MemberEntityResponse
    //         }
    //       `,
    //   resolvers: {
    //     Query: {
    //       member: {
    //         resolve: async (parent, args, context) => {
    //           const { toEntityResponse } = strapi.service(
    //             "plugin::graphql.format"
    //           ).returnTypes;
    //           const data = await strapi.db.query('api::member.member').findOne({
    //             where:{
    //               slug:args.slug,
    //               locale: args.locale
    //             }
    //           })


    //           return toEntityResponse(data);
    //         },
    //       },
    //     },
    //   },
    // }));
    extensionService.use(({ strapi }) => ({
      typeDefs: `
            type Query {
              directionType(path: String!): DirectionTypeEntityResponse
            }
          `,
      resolvers: {
        Query: {
          directionType: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              const data = await strapi.db.query('api::direction-type.direction-type').findOne({
                where:{
                  path:args.path,
                  locale: args.locale
                }
              })


              return toEntityResponse(data);
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
