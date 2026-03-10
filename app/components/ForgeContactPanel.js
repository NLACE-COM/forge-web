import ForgeBlobButton from "./ForgeBlobButton";

export default function ForgeContactPanel() {
  return (
    <section className="forge-contact-panel layout-shell">
      <div className="forge-contact-panel__shell">
        <div className="forge-contact-panel__header">
          <h2>Message us</h2>
          <p>We’d love to hear from you — send us a message and we’ll be in touch soon.</p>
        </div>

        <div className="forge-contact-panel__details">
          <div>
            <span>General contact</span>
            <a href="mailto:hello@forge.systems">hello@forge.systems</a>
          </div>
          <div>
            <span>Partnerships</span>
            <a href="mailto:partners@forge.systems">partners@forge.systems</a>
          </div>
        </div>

        <form className="forge-contact-form">
          <label>
            <span>First name</span>
            <input type="text" name="firstName" />
          </label>
          <label>
            <span>Last name</span>
            <input type="text" name="lastName" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>Phone</span>
            <input type="tel" name="phone" />
          </label>
          <label className="forge-contact-form__full">
            <span>Subject</span>
            <select name="subject" defaultValue="">
              <option value="" disabled>
                Select subject
              </option>
              <option value="diagnostic">System diagnostic</option>
              <option value="partnership">Partnership</option>
              <option value="general">General inquiry</option>
            </select>
          </label>
          <label className="forge-contact-form__full">
            <span>Message</span>
            <textarea name="message" rows="6" />
          </label>
          <div className="forge-contact-form__actions forge-contact-form__full">
            <button type="submit" className="forge-contact-form__submit">
              Submit message
            </button>
            <ForgeBlobButton />
          </div>
        </form>
      </div>
    </section>
  );
}
