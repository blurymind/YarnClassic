export default function genGame(code) {
  return `
<!DOCTYPE html>

<html>

<head>
	<title>kaboom</title>
	<meta charset="utf-8">
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		html,
		body {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	</style>
</head>

<body>
	<script src="/lib/dev/kaboom.js"></script>
	<script>
${code}
	</script>
</body>

</html>
	`;
}

export function genPreview(code) {
  return `
<!DOCTYPE html>

<html>

<head>
	<title>kaboom</title>
	<meta charset="utf-8">
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		html,
		body {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	</style>
</head>

<body>
	<script src="public/plugins/yarn-editor-kaboomjs/kaboom.js"></script>
	<script>
${code}
	</script>
	<canvas id="kaboomCanvas"></canvas>
</body>

</html>
	`;
}
