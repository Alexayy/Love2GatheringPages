const shots = {
  duel: {
    title: 'Duel battlefield',
    caption: 'Creatures meet in the middle. Lands sit behind them, with your hand along the lower edge.',
    alt: 'A duel with opposing creatures in the center, lands behind them and a fanned hand below.'
  },
  commander: {
    title: 'Commander table',
    caption: 'Keep all four battlefields in view, or focus the camera on a single player.',
    alt: 'Four Commander battlefields arranged in a two-by-two grid above the local player’s hand.'
  },
  inspection: {
    title: 'Card preview',
    caption: 'Hover to read the full card on the left. Middle-click for rules text, counters and current power and toughness.',
    alt: 'A large Scavenging Ooze scan on the left of the duel while its battlefield tile shows the current 4/4.'
  },
  mana: {
    title: 'Manual mana payment',
    caption: 'Choose a land on the battlefield or pick the exact source and ability from the payment panel.',
    alt: 'A mana payment panel displaying two separate Forests and the red and green abilities of Stomping Ground.'
  }
};

const menu = document.querySelector('.gallery-nav');
const fullImage = document.querySelector('#full-image');
const image = document.querySelector('#gameplay-image');
const title = document.querySelector('#shot-title');
const caption = document.querySelector('#shot-caption');

menu.addEventListener('click', event => {
  const link = event.target.closest('a[data-shot]');
  if (!link || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button !== 0) return;
  const shot = shots[link.dataset.shot];
  if (!shot) return;
  event.preventDefault();
  menu.querySelector('[aria-current]')?.removeAttribute('aria-current');
  link.setAttribute('aria-current', 'true');
  image.alt = shot.alt;
  image.src = link.href;
  fullImage.href = link.href;
  fullImage.setAttribute('aria-label', 'Open the full-size ' + link.textContent.toLowerCase() + ' screenshot');
  title.textContent = shot.title;
  caption.textContent = shot.caption;
});
