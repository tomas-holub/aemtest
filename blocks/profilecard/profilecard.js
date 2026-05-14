import './ProfileCardComponent.js';

function parseProfileData(block) {
  const [nameRow, roleRow, imgRow] = [...block.children];
  const imgElement = imgRow?.querySelector('img');
  const optimalPicture = imgElement?.closest('picture') || imgElement;

  return {
    name: nameRow?.textContent?.trim() || 'Name not provided',
    role: roleRow?.textContent?.trim() || '',
    imgHtml: optimalPicture ? optimalPicture.outerHTML : '',
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
  const profileCardElement = document.createElement('profile-card');

  block.replaceChildren(profileCardElement);
}
