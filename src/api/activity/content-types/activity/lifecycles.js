let slugify = require("slugify");
const { ApplicationError } = require("@strapi/utils").errors;

module.exports ={
  async beforeCreate(event) {
    await generateSlug(event);
  },

  async beforeUpdate(event) {
    if(event.params.data.title){
      await generateSlug(event);
    }
  },
};

const generateSlug = async (event) => {
  const DEFAULT_LOCALE = "az-Cyrl-AZ";
  const { data } = event.params;
  if(event.action === "beforeCreate" && event.params.data.locale === DEFAULT_LOCALE) {
		event.params.data.slug = null
	}
  const id = event.params.where?.id  ? event.params.where.id : null
  const locale = id ? (await getDataByID(id)).locale : event.params.data.locale;
	
  if (!data.slug && data.title && locale == DEFAULT_LOCALE) {
    data.slug = slugify(data.title, { lower: true , remove:/[*+~.()'"!:@]/g});
    data.slug = await slugGenerator(data.slug)
  } else if(data.slug && data.title && locale == DEFAULT_LOCALE){
    const res= await  strapi.db.query('api::activity.activity').findOne({
      where:{
        id: event.params.where.id
      }
    })
    if(res.title === data.title){
      return
    } else {
      data.slug = slugify(data.title, { lower: true , remove:/[*+~.()'"!:@]/g});
      data.slug = await slugGenerator(data.slug)
    }
  }


  if (!data.slug) {
    throw new ApplicationError("Slug is required!");
  }
};

const getDataByID = async (id) => {
  const res= await strapi.db.query('api::activity.activity').findOne({
    where:{
      id
    }
  })
  return res
};
const slugGenerator = async (slug) =>{
  let counter = 0
  let slugged = slug
  while (true){
    counter++
    const res= await  strapi.db.query('api::activity.activity').findOne({
      where:{
        slug: slugged
      }
    })
    const slugParts = slugged.split('-')
    if(!res){
      return slugged
    } else {
      slugged = slugParts[0] + '-' + counter
      continue
    }
  }
}
