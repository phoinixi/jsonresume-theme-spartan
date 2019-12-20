module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{
				assets: ["index.js", "main.css", "resume.hbs", "package.json"],
				message:
					"chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
			}
		]
	]
};
