// function to add text to elements
export function addContactText(elements) {
  const { title, subtitle1, subtitle2, subtitle1Content, subtitle2Content } =
    elements;

  // contactBtn.onClick = addContactText();
  // adding text to title and subtitle
  title.innerText = "Thank You";
  subtitle1.innerHTML = "The Team";
  subtitle2.innerText = "";

  // adding text to content
  subtitle1Content.innerHTML = `<ul>
  <li>Keshar Jarga</li>
  <li>Tuk Gurung</li>
</ul>`;

  subtitle2Content.innerHTML = `<form>
  <fieldset>
    <label class="label">Contact Us</label>
    <input
      name="name"
      type="text"
      class="feedback-input"
      placeholder="Name"
    />
    <input
      name="email"
      type="text"
      class="feedback-input"
      placeholder="Email"
    />
    <textarea
      name="text"
      class="feedback-input"
      placeholder="Comment"
    ></textarea>
    <input type="submit" value="SUBMIT" />
  </fieldset>
</form>`;
}
