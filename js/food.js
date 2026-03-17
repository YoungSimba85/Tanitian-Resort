document.querySelectorAll('.categoryTitle').forEach(title => {
  title.addEventListener('click', () => {
    title.parentElement.classList.toggle('active');
  });
});

// Instagram overlay functionality
(function(){
  const thumbnails = document.querySelectorAll('.instagramFeed img');
  const overlay = document.getElementById('img-overlay');
  const overlayImg = document.getElementById('overlay-img');
  const overlayLink = document.getElementById('overlay-link');
  // Use the image file already present in the page's #img-overlay markup
  const defaultOverlaySrc = overlayImg ? (overlayImg.getAttribute('src') || overlayImg.dataset.src || '') : '';
  const instaUrl = 'https://www.instagram.com';

  if(!overlay || !overlayImg) return;

  thumbnails.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function(e){
      e.preventDefault();
      if(defaultOverlaySrc) overlayImg.src = defaultOverlaySrc;
      if(overlayLink) overlayLink.href = instaUrl;
      overlay.setAttribute('aria-hidden','false');
    });
  });

  // Close when clicking outside the image (i.e., on overlay background)
  overlay.addEventListener('click', function(e){
    if(e.target === overlay){
      overlay.setAttribute('aria-hidden','true');
      // keep overlayImg.src so we can reuse the configured image
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false'){
      overlay.setAttribute('aria-hidden','true');
      overlayImg.src = '';
    }
  });
})();