//priority: 1000
ProbeJSEvents.generateDoc((event) => {
	event.addSnippet(
		"text",
		Object.keys(global.formatcodes),
		"Minecraft text colors"
	);
});

console.log("Done!");
