
console.log("sw scripts")
self.addEventListener('fetch', event => {
  alert("eh")
  if (event.request.method !== 'POST') {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith((async () => {
    const formData = await event.request.formData();
    alert("yay");
    const link = formData.get('link') || '';
    const responseUrl = await saveBookmark(link);
    return Response.redirect('/', 303);
  })());
});