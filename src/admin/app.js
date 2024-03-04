export default {
  config: {
		locales:['ru','az'],
		
    tutorials: false,
		translations: {
				ru: {
					'Auth.form.welcome.title': 'Добро пожаловать в cPanel!',
					'Auth.form.welcome.subtitle':"Войдите в свой аккаунт",
					'Auth.form.email.label':"Почта",
					"global.password":"Пароль",
					"app.components.LeftMenu.navbrand.title":"cPanel",
					"app.components.HomePage.welcomeBlock.content.again":"Надеемся, что вы делаете успехи в вашем проекте... Мы стараемся изо всех сил, чтобы улучшить продукт, основываясь на ваших пожеланиях."
				},
				en: {
					'Auth.form.welcome.title': 'Welcome to cPanel!',
					'Auth.form.welcome.subtitle':"Log in to your account",
					"app.components.LeftMenu.navbrand.title":"cPanel",
					"app.components.HomePage.welcomeBlock.content.again":"We hope you are making progress on your project! We are giving our best to improve the product based on your feedback."
				},
			},
    notifications: { releases: false },
  },

  bootstrap() {},
};