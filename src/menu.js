// function to add text to elements
export function addMenuText(elements) {
  const { title, subtitle1, subtitle2, subtitle1Content, subtitle2Content } =
    elements;

  // contactBtn.onClick = addContactText();
  // adding text to title and subtitle
  title.innerText = "Menu";
  subtitle1.innerText = "Lunch";
  subtitle2.innerText = "Dinner";

  // adding text to content
  subtitle1Content.innerHTML = `
  <ul>
  <li>Nepali Set Meal</li>
  <li>Yak Stew</li>
  <li>Butter Chicken</li>
  <li>Lamb Korma</li>
  <li>Tandoori Chicken</li>
</ul>`;

  subtitle2Content.innerHTML = `
  <ul>
  <li>Crispy Kale</li>
  <li>Veg Manchurion</li>
  <li>Samosa Chat</li>
  <li>Chicken Chili</li>
  <li>Buff Choila</li>
</ul>`;
}
