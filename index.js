if (navigator.serviceWorker) {
  navigator.serviceWorker.register('serviceWorker.js', {
    scope: './'
  })
    .then((registration) => {
      if (registration.installing) {
        console.log('Service worker installing');
      }
      else if (registration.waiting) {
        console.log('Service worker installed');
      }
      else if (registration.active) {
        console.log('Service worker active');
      }
    })
    .catch((err) => {
      console.error(err);
    });
}