// Todo export feature
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

const generateResources = (resources = []) => {
  // console.log(resources);
  const resBoilerplate = resources
    .map((resource, index) => {
      if (!resource.file) return '';
      const resourceName = resource.name || index;
      if (resource.file.startsWith('data:image/'))
        return `loadSprite("${resourceName}", "${resource.file}");`;
      if (resource.file.startsWith('data:audio/'))
        return `loadSound("${resourceName}", "${resource.file}");`;
      return '';
    })
    .join('\n');
  // console.log('CODE:', resBoilerplate);
  return resBoilerplate;
};
export const genPreview = (code, resources = []) => {
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
    ${generateResources(resources)}
	</script>
	<canvas id="kaboomCanvas"></canvas>
</body>

</html>
	`;
};

export const helloKaboom = `
kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
});

scene("main", () => {
  add([ text("hello from kaboom ;)"), pos(100, 100),]);
});

start("main");
`;
