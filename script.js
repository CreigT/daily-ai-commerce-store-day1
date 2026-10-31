document.addEventListener('DOMContentLoaded', () => {
  const c = STORE_CONFIG;

  // Populate content
  document.getElementById('page-title').textContent = c.productName;
  document.getElementById('logo').textContent = c.productName.split(' ')[0];
  document.getElementById('badge').textContent = c.badge;
  document.getElementById('product-name').textContent = c.productName;
  document.getElementById('tagline').textContent = c.tagline;
  document.getElementById('description').textContent = c.description;
  document.getElementById('price').textContent = c.price;
  document.getElementById('price-large').textContent = c.price;
  document.getElementById('original-price').textContent = c.originalPrice || '';
  document.getElementById('guarantee').textContent = c.refundPolicy;
  document.getElementById('refund-text').textContent = c.refundPolicy;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Images
  if (c.heroImage) document.getElementById('hero-img').src = c.heroImage;
  if (c.productImage) document.getElementById('product-img').src = c.productImage;

  // Features
  const featuresEl = document.getElementById('features');
  featuresEl.innerHTML = c.features.map(f => `<li>${f}</li>`).join('');

  // Testimonials
  const testEl = document.getElementById('testimonials');
  testEl.innerHTML = c.testimonials.map(t => `
    <div class="testimonial">
      <p>"${t.text}"</p>
      <div class="name">${t.name}</div>
      <div class="role">${t.role}</div>
    </div>
  `).join('');

  // Buy buttons
  const buttons = document.querySelectorAll('#buy-button, #buy-button-2');
  buttons.forEach(btn => {
    if (c.paymentLink && c.paymentLink.includes('http')) {
      btn.href = c.paymentLink;
      btn.target = '_blank';
    } else {
      btn.href = '#';
      btn.onclick = (e) => {
        e.preventDefault();
        alert('Please set your payment link in config.js');
      };
    }
  });
});
