import 'https://esm.run/@material/web/button/filled-button.js';
import 'https://esm.run/@material/web/icon/icon.js';

function parseData(block) {
  const rows = Array.from(block.children);
  const [titleRow, descRow, imgRow, priceRow] = rows;

  return {
    title: titleRow?.textContent?.trim() || 'Produkt',
    description: descRow?.textContent?.trim() || '',
    imgHtml: imgRow?.querySelector('div')?.innerHTML || '',
    price: priceRow?.textContent?.trim() || '0 Kč',
  };
}

function renderCard(data) {
  return `
    <div class="md-product-card">
      <div class="md-product-card__image">${data.imgHtml}</div>

      <div class="md-product-card__content">
        <h3>${data.title}</h3>

        <p>${data.description}</p>

        <div class="md-product-card__footer">
          <span>${data.price}</span>

          <md-filled-button data-action="buy">
            <md-icon slot="icon">shopping_cart</md-icon>
            Koupit
          </md-filled-button>
        </div>
      </div>
    </div>
  `;
}

export default function decorate(block) {
  const data = parseData(block);

  block.innerHTML = renderCard(data);
}
