import EmailIcon from "@/app/SVG/EmailIcon";
import LocationIcon from "@/app/SVG/LocationIcon";
import PhoneIcon from "@/app/SVG/PhoneIcon";
import React from "react";

function GetInTouch() {
  return (
    <section
      className="py-20 px-6 reveal bg-secondary-background"
      id="contact"
    >
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold text-primary-color">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 leading-relaxed text-primary-color">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out using the form or through my social media
              profiles.
            </p>

            <div className="flex items-start mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center mr-4 rounded-full bg-primary-background"
              >
                <LocationIcon />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-primary-color">
                  Location
                </h3>
                <p className="bg-secondary-background text-tertiary-color">Kochi, India</p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center mr-4 rounded-full bg-primary-background"
              >
                <EmailIcon />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-primary-color">
                  Email
                </h3>
                <p className="bg-secondary-background text-tertiary-color">sreekuttansrk7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className="w-10 h-10 flex items-center justify-center mr-4 rounded-full bg-primary-background"
              >
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-primary-color">
                  Phone
                </h3>
                <p className="bg-secondary-background text-tertiary-color">+91 9895132236</p>
              </div>
            </div>
          </div>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-primary-color"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded border-none text-sm"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary-color"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded border-none text-sm"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                  }}
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-primary-color"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded border-none text-sm"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                }}
                placeholder="Subject"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-primary-color"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded border-none text-sm resize-none"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                }}
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-medium !rounded-button whitespace-nowrap transition-transform hover:transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
