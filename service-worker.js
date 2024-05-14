self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('weight-calculator-v1').then(function(cache) {
        return cache.addAll([
          '/?source=pwa',
          '/index.html',
          '/manifest.json',
          '/planets.png',
          '/Galaxy.jpg',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
          'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });