import React from 'react'

function Footer() {
return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex items-center justify-between">
        <p className="w-full text-center">
            &copy; {new Date().getFullYear()} Made and Developed by {"Ishani Nirala"}
        </p>
        <div className="flex items-center gap-1 bg-base-200 rounded-lg px-2 py-1">
              <span className="text-xs opacity-70">developer credentials</span>
              <a
              href="https://ishaniniralaportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle min-h-0 h-8 w-8"
              aria-label="Portfolio"
              style={{ backgroundColor: "rgba(30,30,40,0.85)" }}
              >
              <svg
                width="23.04"
                height="23.04"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.21 0 4.21.9 5.66 2.34l-5.66 5.66-5.66-5.66C7.79 4.9 9.79 4 12 4zm-8 8c0-1.85.63-3.55 1.69-4.9l5.66 5.66-7.35 2.12C4.04 13.36 4 12.68 4 12zm8 8c-2.21 0-4.21-.9-5.66-2.34l5.66-5.66 5.66 5.66C16.21 19.1 14.21 20 12 20zm6.31-3.1l-5.66-5.66 7.35-2.12c.61 1.06.95 2.29.95 3.58 0 .68-.04 1.36-.12 2.02z"/>
              </svg>
              </a>
              <a
              href="https://github.com/isshhh9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle min-h-0 h-8 w-8"
              aria-label="GitHub"
              style={{ backgroundColor: "rgba(30,30,40,0.85)" }}
              >
              <svg
                width="23.04"
                height="23.04"
                fill="currentColor">
                <path
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.135 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
                />
              </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ishani-nirala"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle min-h-0 h-8 w-8"
                aria-label="LinkedIn"
                style={{ backgroundColor: "rgba(30,30,40,0.85)" }}
              >
                <svg
                  width="23.04"
                  height="23.04"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.045 0 3.607 2.005 3.607 4.614v5.582z"/>
                </svg>
              </a>
        </div>
    </footer>
);
}

export default Footer;
