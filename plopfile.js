module.exports = function (plop) {
	// Gerador para criar um Controller
	plop.setGenerator("controller", {
		description: "Cria um novo controller",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Qual o nome do controller?",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/controllers/{{camelCase name}}Controller.ts",
				templateFile: "plop-templates/controller.ts.hbs",
			},
		],
	});

	// Gerador para criar um Service
	plop.setGenerator("service", {
		description: "Cria um novo service",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Qual o nome do service?",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/services/{{camelCase name}}Service.ts",
				templateFile: "plop-templates/Service.ts.hbs",
			},
		],
	});
};
