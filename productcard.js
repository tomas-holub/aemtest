import "@material/web/button/filled-button.js";
import "@material/web/icon/icon.js";
function parseData(block) {
  const rows = Array.from(block.children);
  const [titleRow, descRow, imgRow, priceRow] = rows;
  return {
    title: titleRow?.textContent?.trim() || "Produkt",
    description: descRow?.textContent?.trim() || "",
    imgHtml: imgRow?.querySelector("div")?.innerHTML || "",
    price: priceRow?.textContent?.trim() || "0 K\u010D"
  };
}
function renderCard(data) {
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
            <md-icon slot="icon">shopping_cart</md-icon> <!-- Pojmenovan\xFD slot pro ikonu -->
            Koupit <!-- V\xFDchoz\xED slot pro text tla\u010D\xEDtka -->
          </md-filled-button>
        </div>
      </div>
    </div>
  `;
}
function decorate(block) {
  const data = parseData(block);
  block.innerHTML = renderCard(data);
  block.querySelector('[data-action="buy"]')?.addEventListener("click", () => {
    alert(`Produkt "${data.title}" byl p\u0159id\xE1n do ko\u0161\xEDku.`);
  });
}
export {
  decorate as default
};
//# sourceMappingURL=productcard.js.map
