const shareTargetHandler = async ({event}) => {
  const formData = await event.request.formData();
  const cache = await caches.open('images');
  alert(JSON.stringify(formData));

  await cache.put(
    // TODO: Come up with a more meaningful cache key.
    `/images/${Date.now()}`,
    // TODO: Get more meaningful metadata and use it
    // to construct the response.
    new Response(formData.get('image'))
  );

  // After the POST succeeds, redirect to the main page.
  return Response.redirect('/', 303);
};

module.exports = {
  // Set a few params to make for fewer generated files.
  // mode: 'development',
  inlineWorkboxRuntime: true,
  sourcemap: false,
  skipWaiting: true,
  globDirectory: 'src',
  globPatterns: ['index.js', 'manifest.json', '*.{html,css,js,json,ico,png,scss}'],
  swDest: 'dist/sw.js',
  runtimeCaching: [{
    // Create a 'fake' route to handle the incoming POST.
    urlPattern: '/share-target',
    method: 'POST',
    handler: shareTargetHandler,
  }, {
    // Create a route to serve the cached images.
    urlPattern: new RegExp('/images/\\d+'),
    handler: 'CacheOnly',
    options: {
      cacheName: 'images',
    },
  }],
};
