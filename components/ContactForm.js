import { useForm, ValidationError } from "@formspree/react";
import formStyles from "../styles/form.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("myyorplg");
  if (state.succeeded) {
    document.getElementById("form-success").style.display = "block";
  }
  return (
    <div
      className="self-center inline-flex items-center justify-start py-6 w-full m-auto relative rounded-xl contact-wrapper mb-4"
      id="contact"
    >
      <div className="mx-auto max-w-lg">
        <p className="mt-3 text-center text-base contact-intro text-sky-200">
          Email address:{" "}
          <span className="text-white">matija.krajacic5@gmail.com</span>
          <br />
          Linkedin{" "}
          <a
            className="text-white"
            href="https://www.linkedin.com/in/matija-kraja%C4%8Di%C4%87/"
          >
            link
          </a>
          <br />
          or use the contact form below:
        </p>
        <form onSubmit={handleSubmit} className="mt-10" id="contact-form">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-sky-300 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className={formStyles.fieldErrors}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-400 peer-focus:dark:text-sky-300">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-sky-300 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className={formStyles.fieldErrors}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-400 peer-focus:dark:text-sky-300">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-50 bg-transparent py-2.5 px-0 text-sm text-gray-200 focus:border-sky-300 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className={formStyles.fieldErrors}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-400 peer-focus:dark:text-sky-300">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-sky-900 px-10 py-2 text-white send-btn"
            disabled={state.submitting}
          >
            Send Message
          </button>
          <ValidationError
            errors={state.errors}
            className={formStyles.formErrors}
          />

          <span id="form-success" className={formStyles.formSucceeded}>
            Submission successful!
          </span>
        </form>
      </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}
export default App;
