import { insertBadge } from "./badge";
import "./style.css";

insertBadge();

// Your script here
const cardsGrid = document.querySelector<HTMLElement>(".cards-grid");
const sortSelect = document.querySelector<HTMLSelectElement>("#sort-selection");

type Card = {
  id: string;
  name: string;
  collector_num: number;
  set: string;
  image_url: string;
  description: string;
};

// Cards info
const cards: Array<Card> = [
  {
    id: "1778cf9a-2703-41e9-86d7-ec21af8cf61d",
    name: "Ainok Bond-Kin",
    collector_num: 5,
    set: "2x2",
    image_url:
      "https://data.cardsandhobbies.com/images/1778cf9a-2703-41e9-86d7-ec21af8cf61d/card.jpg",
    description:
      "Outlast [1][W] ([1][W], [Tap]: Put a +1/+1 counter on this creature. Outlast only as a sorcery.)\nEach creature you control with a +1/+1 counter on it has first strike.",
  },
  {
    id: "d4282ddd-3e5b-4d4c-b1b7-a48401a3521f",
    name: "Wrenn and Six",
    collector_num: 553,
    set: "2x2",
    image_url:
      "https://data.cardsandhobbies.com/images/d4282ddd-3e5b-4d4c-b1b7-a48401a3521f/card.jpg",
    description:
      '+1: Return up to one target land card from your graveyard to your hand.\n−1: Wrenn and Six deals 1 damage to any target.\n−7: You get an emblem with "Instant and sorcery cards in your graveyard have retrace." (You may cast instant and sorcery cards from your graveyard by discarding a land card in addition to paying their other costs.)',
  },
  {
    id: "1825a719-1b2a-4af9-9cd2-7cb497cd0317",
    name: "Force of Negation",
    collector_num: 50,
    set: "2x2",
    image_url:
      "https://data.cardsandhobbies.com/images/1825a719-1b2a-4af9-9cd2-7cb497cd0317/card.jpg",
    description:
      "If it's not your turn, you may exile a blue card from your hand rather than pay this spell's mana cost.\nCounter target noncreature spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard.",
  },
  {
    id: "3c429c40-2389-41e5-8681-4bb274e25eba",
    name: "Mana Drain",
    collector_num: 57,
    set: "2x2",
    image_url:
      "https://data.cardsandhobbies.com/images/3c429c40-2389-41e5-8681-4bb274e25eba/card.jpg",
    description:
      "Counter target spell. At the beginning of your next main phase, add an amount of [C] equal to that spell's mana value.",
  },
  {
    id: "9e2e3efb-75cb-430f-b9f4-cb58f3aeb91b",
    name: "Dockside Extortionist",
    collector_num: 107,
    set: "2x2",
    image_url:
      "https://data.cardsandhobbies.com/images/9e2e3efb-75cb-430f-b9f4-cb58f3aeb91b/card.jpg",
    description:
      'When Dockside Extortionist enters the battlefield, create X Treasure tokens, where X is the number of artifacts and enchantments your opponents control. (Treasure tokens are artifacts with "[Tap], Sacrifice this artifact: Add one mana of any color.")',
  },
  {
    id: "c1a31d52-a407-4ded-bfca-cc812f11afa0",
    name: "Mana Vault",
    collector_num: 308,
    set: "2x2",
    image_url:
      "https://data.cardsandhobbies.com/images/c1a31d52-a407-4ded-bfca-cc812f11afa0/card.jpg",
    description:
      "Mana Vault doesn't untap during your untap step.\nAt the beginning of your upkeep, you may pay [4]. If you do, untap Mana Vault.\nAt the beginning of your draw step, if Mana Vault is tapped, it deals 1 damage to you.\n[Tap]: Add [C][C][C].",
  },
];

// Sort cards on CHANGE
sortSelect?.addEventListener("change", () => {
  if (sortSelect.value === "asc") {
    displayCards(cards.sort((a, b) => a.collector_num - b.collector_num));
  } else {
    displayCards(cards.sort((a, b) => b.collector_num - a.collector_num));
  }
});

// Display cards
function displayCards(cards: Array<Card>): void {
  // Remove prior display
  if (cardsGrid?.hasChildNodes()) {
    cardsGrid.innerHTML = "";
  }

  for (let card of cards) {
    // Create 'card' div
    const cardDiv: HTMLDivElement = document.createElement("div");
    cardDiv.classList.add("card");
    
    // Create div children -- image, info, name, description
    const cardImage: HTMLImageElement = document.createElement("img");
    cardImage.classList.add("card__image");
    cardImage.setAttribute("src", card.image_url);
    cardImage.setAttribute("alt", `${card.name} Card Image`);

    const cardInfo: HTMLDivElement = document.createElement("div");
    cardInfo.classList.add("card__info");
    cardInfo.innerText = `${card.set.toUpperCase()} | ${String(
      card.collector_num
    ).padStart(3, "0")}`;

    const cardName: HTMLHeadingElement = document.createElement("h2");
    cardName.classList.add("card__name");
    cardName.innerText = card.name;

    const cardDescription: HTMLDivElement = document.createElement("div");
    const paragraphs: Array<string> = card.description.split("\n");
    for (let p of paragraphs) {
        const para: HTMLParagraphElement = document.createElement("p");
        para.innerText = p;
        cardDescription.appendChild(para);
    }
    cardDescription.classList.add("card__description");

    // Append children to div
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardInfo);
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardDescription);

    // Append div to grid
    cardsGrid?.appendChild(cardDiv);
  }
}

displayCards(cards.sort((a, b) => a.collector_num - b.collector_num));
