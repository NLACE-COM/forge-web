import ForgeRevealHeading from "./ForgeRevealHeading";

export default function ForgeContactPanel() {
  return (
    <section className="forge-contact-panel layout-shell tw:pt-24">
      <div className="forge-contact-panel__shell tw:rounded-[34px] tw:bg-[#111111] tw:p-8 tw:text-white">
        <div className="forge-contact-panel__header tw:max-w-[780px]">
          <ForgeRevealHeading text="Message us" blockColor="rgba(17, 17, 17, 0.94)" />
          <p className="tw:mt-5 tw:m-0 tw:text-[1.05rem] tw:leading-[1.45] tw:text-[rgba(255,255,255,0.76)]">We’d love to hear from you — send us a message and we’ll be in touch soon.</p>
        </div>

        <div className="forge-contact-panel__details tw:mt-8 tw:grid tw:grid-cols-2 tw:gap-4 max-[980px]:tw:grid-cols-1">
          <div className="tw:rounded-[22px] tw:bg-[rgba(255,255,255,0.05)] tw:p-5">
            <span className="tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.5)]">General contact</span>
            <a className="tw:mt-3 tw:inline-block tw:text-[1.2rem] tw:tracking-[-0.03em]" href="mailto:hello@forge.systems">hello@forge.systems</a>
          </div>
          <div className="tw:rounded-[22px] tw:bg-[rgba(255,255,255,0.05)] tw:p-5">
            <span className="tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.5)]">Partnerships</span>
            <a className="tw:mt-3 tw:inline-block tw:text-[1.2rem] tw:tracking-[-0.03em]" href="mailto:partners@forge.systems">partners@forge.systems</a>
          </div>
        </div>

        <form className="forge-contact-form tw:mt-8 tw:grid tw:grid-cols-2 tw:gap-4 max-[980px]:tw:grid-cols-1">
          <label>
            <span className="tw:mb-2 tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.56)]">First name</span>
            <input type="text" name="firstName" className="d-input tw:w-full tw:border-white/10 tw:bg-white/5 tw:text-white" />
          </label>
          <label>
            <span className="tw:mb-2 tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.56)]">Last name</span>
            <input type="text" name="lastName" className="d-input tw:w-full tw:border-white/10 tw:bg-white/5 tw:text-white" />
          </label>
          <label>
            <span className="tw:mb-2 tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.56)]">Email</span>
            <input type="email" name="email" className="d-input tw:w-full tw:border-white/10 tw:bg-white/5 tw:text-white" />
          </label>
          <label>
            <span className="tw:mb-2 tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.56)]">Phone</span>
            <input type="tel" name="phone" className="d-input tw:w-full tw:border-white/10 tw:bg-white/5 tw:text-white" />
          </label>
          <label className="forge-contact-form__full tw:col-span-2 max-[980px]:tw:col-span-1">
            <span className="tw:mb-2 tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.56)]">Subject</span>
            <select name="subject" defaultValue="" className="d-select tw:w-full tw:border-white/10 tw:bg-white/5 tw:text-white">
              <option value="" disabled>
                Select subject
              </option>
              <option value="diagnostic">System diagnostic</option>
              <option value="partnership">Partnership</option>
              <option value="general">General inquiry</option>
            </select>
          </label>
          <label className="forge-contact-form__full tw:col-span-2 max-[980px]:tw:col-span-1">
            <span className="tw:mb-2 tw:block tw:font-[var(--family--2)] tw:text-[0.8rem] tw:uppercase tw:tracking-[0.04em] tw:text-[rgba(255,255,255,0.56)]">Message</span>
            <textarea name="message" rows="6" className="d-textarea tw:w-full tw:border-white/10 tw:bg-white/5 tw:text-white" />
          </label>
          <div className="forge-contact-form__actions forge-contact-form__full tw:col-span-2 tw:flex tw:items-center tw:justify-between tw:gap-4 max-[980px]:tw:col-span-1 max-[980px]:tw:justify-start" data-theme="dark">
            <button type="submit" className="forge-contact-form__submit d-btn d-btn-primary">
              Submit message
            </button>
            <button type="button" className="d-btn d-btn-circle d-btn-outline" aria-label="Decorative action">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18" aria-hidden="true">
                <path fill="currentColor" d="M10.257 3.343h-1.5v8.054L5.246 7.886 4.186 8.946 9.5 14.26l5.314-5.314-1.06-1.06-3.497 3.497V3.343Z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
