import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer bg-black-800 pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
      <div className="container">
        <div className="overflow-x-hidden" data-aos="flip-down">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <div className="pt-12">
              <h3 className="text-white font-Syne font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[0] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                  Looking
                </span>{" "}
                forward to hearing from you.
              </h3>
              <div className="flex flex-wrap items-center mt-10">
                <ul className="flex flex-wrap gap-x-4 items-center">
                    <li>
                      <a
                        href="https://www.linkedin.com"
                        className="text-white hover:text-orange"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com"
                        className="text-white hover:text-orange"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:joshuak2001@gmail.com"
                        className="text-white hover:text-orange"
                        aria-label="Email"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <Link href="/" className="text-white hover:text-orange" aria-label="Portfolio">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM18.93 11H15.95C15.8 9.44 15.28 7.98 14.43 6.74C16.77 7.59 18.5 9.08 18.93 11ZM12 4.84C13.22 6.16 13.97 8.03 14.14 11H9.86C10.03 8.03 10.78 6.16 12 4.84ZM5.07 13H8.05C8.2 14.56 8.72 16.02 9.57 17.26C7.23 16.41 5.5 14.92 5.07 13ZM8.05 11H5.07C5.5 9.08 7.23 7.59 9.57 6.74C8.72 7.98 8.2 9.44 8.05 11ZM12 19.16C10.78 17.84 10.03 15.97 9.86 13H14.14C13.97 15.97 13.22 17.84 12 19.16ZM14.43 17.26C15.28 16.02 15.8 14.56 15.95 13H18.93C18.5 14.92 16.77 16.41 14.43 17.26Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>

            <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
              <h3 className="text-xl font-bold font-Syne text-white">Send me a message</h3>
              <div className="flex justify-between items-center gap-4">
                <p className="text-2xl font-bold font-Syne leading-none text-orange">
                  joshuak2001@gmail.com
                </p>
                <a
                  href="mailto:joshuak2001@gmail.com"
                  className="text-white group-hover:animate-arrow-move-up group-hover:text-orange shrink-0"
                  aria-label="Email Joshua"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
              <h3 className="text-xl font-bold font-Syne text-white">
                Want a more in-depth look at my history?
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold font-Syne leading-none text-orange">
                  +598 6879 9874
                </p>
                <a href="#" className="text-white group-hover:animate-arrow-move-up group-hover:text-orange">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border-white pt-6 mt-[72px]">
            <div className="flex justify-end">
              <a
                id="scrollUp"
                className="flex flex-wrap items-center gap-2 group"
                href="#"
                aria-label="scroll up"
              >
                <span className="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange">
                  Back to Top
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 19V5"
                    stroke="#FFB646"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12L12 5L5 12"
                    stroke="#FFB646"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
