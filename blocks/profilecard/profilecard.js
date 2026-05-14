function parseProfileData(block) {
  const [nameRow, roleRow, imgRow] = [...block.children];

  return {
    name: nameRow?.textContent?.trim() || 'Name not provided',
    role: roleRow?.textContent?.trim() || '',
    imgHtml: imgRow?.querySelector('img')?.innerHTML || '',
  };
}

function renderProfileCard(data) {
  return `
    <div class="profile-card">
        <div class="profile-card__img">${data.imgHtml}</div>
        <div class="profile-card__name">${data.name}</div>
        <div class="profile-card__role">${data.role}</div>
    </div>
  `;
}

export default function decorate(block) {
  const data = parseProfileData(block);

  block.innerHTML = renderProfileCard(data);

  block.querySelector('[data-action="connect"]')?.addEventListener('click', () => {
    alert('test');
  });
}
