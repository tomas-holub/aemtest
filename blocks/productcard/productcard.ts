// Importujeme konkrétní Material komponenty, čímž je zaregistrujeme v prohlížeči
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';

interface ProductData {
    title: string;
    description: string;
    price: string;
    imgHtml: string;
}

function parseData(block: HTMLElement): ProductData {
    const rows = Array.from(block.children) as HTMLElement[];
    const [titleRow, descRow, imgRow, priceRow] = rows;

    return {
        title: titleRow?.textContent?.trim() || 'Produkt',
        description: descRow?.textContent?.trim() || '',
        imgHtml: imgRow?.querySelector('div')?.innerHTML || '',
        price: priceRow?.textContent?.trim() || '0 Kč',
    };
}

function renderCard(data: ProductData): string {
    return `
    <div class="md-product-card">
      <div class="md-product-card__image">${data.imgHtml}</div>
      <div class="md-product-card__content">
        <h3 class="md-product-card__title">${data.title}</h3>
        <p class="md-product-card__desc">${data.description}</p>
        
        <div class="md-product-card__footer">
          <span class="md-product-card__price">${data.price}</span>
          
          <!-- INTEGRACE MATERIAL WEB KOMPONENT -->
          <md-filled-button class="md-product-card__btn" data-action="buy">
            <md-icon slot="icon">shopping_cart</md-icon> <!-- Pojmenovaný slot pro ikonu -->
            Koupit <!-- Výchozí slot pro text tlačítka -->
          </md-filled-button>
        </div>
      </div>
    </div>
  `;
}

export default function decorate(block: HTMLElement): void {
    const data = parseData(block);
    block.innerHTML = renderCard(data);

    // Navázání akce na Material tlačítko
    block.querySelector('[data-action="buy"]')?.addEventListener('click', () => {
        alert(`Produkt "${data.title}" byl přidán do košíku.`);
    });
}
