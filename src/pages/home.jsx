import React from "react";
import logo from "../assets/logo.jpg";
import logo1 from "../assets/logo_.svg";
import eventsbanner from "../assets/eventsbanner.jpg";
import faq from "../assets/faq.jpg";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Navbar section starts */}
        <div className="col-12 p-0">
          <nav
            class="bg-black relative  w-full mx-auto px-4 py-2 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
          >
            {/* Navbar logo starts */}
            <div class="flex items-center justify-between">
              <a
                class="flex-none text-xl font-semibold text-white dark:text-white"
                href="#"
                aria-label="Brand"
              >
                <img src={logo} className="logo w-auto" />
              </a>
              <div class="sm:hidden md:hidden">
                <button
                  type="button"
                  class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg  text-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none  "
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    class="hs-collapse-open:hidden size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    class="hs-collapse-open:block flex-shrink-0 hidden size-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Navbar logo ends */}

            {/* Navlinks starts */}
            <div
              id="navbar-collapse-with-animation"
              class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block "
            >
              <div class="navlink flex flex-col gap-y-4 gap-x-0 mt-2 mb-2 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:mb-0 sm:ps-7">
                <a
                  class="font-medium text-sm text-white hover:text-gray-200 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href={"#story"}
                >
                  <span>The Story</span>
                </a>
                <a
                  class="font-medium text-sm text-white hover:text-gray-200 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href={"#flavours"}
                >
                  <span>Flavours</span>
                </a>
                <a
                  class="font-medium text-sm text-white hover:text-gray-200 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href={"#upcoming"}
                >
                  <span>Upcoming</span>
                </a>
                <a
                  class="link font-medium text-sm text-white hover:text-gray-200 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href={"#ondemand"}
                >
                  <span>On Demand</span>
                </a>
                <a
                  class="font-medium text-sm text-white hover:text-gray-200 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href={"#faq"}
                >
                  <span>FAQs</span>
                </a>

                <button
                  href={"contactus"}
                  type="button"
                  class="py-1 px-2 w-f-c inline-flex items-center w-auto gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Contact us
                </button>

                <div
                  class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:hidden sm:my-6  dark:text-gray-400 dark:hover:text-blue-500"
                  href="#"
                >
                  <img src={logo1} className="img-fluid" />
                </div>
              </div>
            </div>
            {/* Navlinks ends */}
          </nav>
        </div>
        {/* Navbar section ends */}


        {/* thestory section stats */}
        <div className="col-12 p-0">
          {/* Quick share section starts */}
          <div class="fixed right-0 top-2/4 z-50 px-3 py-2 bg-black flex flex-col space-y-3">
            <a href="#">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
                stroke-width="2.432"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M55.16 20.42A5.94 5.94 0 0 0 50 15.6c-6-.38-12-.69-18-.7s-12 .3-18 .68a5.94 5.94 0 0 0-5.17 4.82 79.25 79.25 0 0 0 0 22.88 6.17 6.17 0 0 0 5.19 5c6 .38 12 .77 18 .77s12-.34 18-.73a6.24 6.24 0 0 0 5.18-5.1 78.19 78.19 0 0 0 .8-11.38 78 78 0 0 0-.84-11.42z"></path>
                  <polygon points="26.56 38.73 26.56 24.79 39.55 31.76 26.56 38.73"></polygon>
                </g>
              </svg>{" "}
            </a>
            <a href="#">
              <svg
                className="size-5"
                fill="#ffffff"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                    fill-rule="evenodd"
                  ></path>{" "}
                </g>
              </svg>{" "}
            </a>

            <a href="#">
              <svg
                className="size-7"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#ffffff"
                    stroke-width="12"
                    d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
                  ></path>
                  <circle
                    cx="96"
                    cy="96"
                    r="30"
                    stroke="#ffffff"
                    stroke-width="12"
                  ></circle>
                  <circle cx="135" cy="57" r="9" fill="#ffffff"></circle>
                </g>
              </svg>
            </a>

            <a href="#">
              <svg
                className="size-6"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                width="139px"
                height="139px"
                viewBox="0 0 31.812 26"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M20.877,2.000 C22.519,2.000 24.382,2.652 25.426,3.738 C26.724,3.486 27.949,3.025 29.050,2.386 C28.625,3.687 27.718,4.779 26.540,5.469 C27.693,5.332 28.797,5.035 29.820,4.590 C29.054,5.707 28.087,6.690 26.971,7.477 C26.981,7.715 26.987,7.955 26.987,8.195 C26.987,15.562 21.445,24.000 10.939,24.000 C7.715,24.000 4.507,23.133 1.982,21.551 C2.428,21.605 2.883,21.631 3.343,21.631 C6.019,21.631 8.482,20.740 10.439,19.242 C7.937,19.199 5.827,17.586 5.103,15.373 C5.450,15.437 5.810,15.473 6.178,15.473 C6.696,15.473 7.203,15.406 7.681,15.277 C5.068,14.768 3.100,12.514 3.100,9.813 C3.100,9.787 3.100,9.764 3.100,9.740 C3.871,10.158 4.750,10.410 5.687,10.440 C4.154,9.437 3.147,7.734 3.147,5.799 C3.147,4.777 3.428,3.818 3.919,2.998 C6.735,6.367 10.945,8.588 15.693,8.822 C15.594,8.414 15.543,7.984 15.543,7.553 C15.543,4.473 17.721,2.000 20.877,2.000 M29.820,4.590 L29.825,4.590 M20.877,-0.000 C17.033,-0.000 14.060,2.753 13.614,6.552 C10.425,5.905 7.524,4.204 5.440,1.711 C5.061,1.257 4.503,0.998 3.919,0.998 C3.867,0.998 3.815,1.000 3.763,1.004 C3.123,1.055 2.547,1.413 2.216,1.966 C1.525,3.122 1.159,4.447 1.159,5.799 C1.159,6.700 1.321,7.579 1.625,8.400 C1.300,8.762 1.113,9.238 1.113,9.740 L1.113,9.813 C1.113,11.772 1.882,13.589 3.160,14.952 C3.087,15.294 3.103,15.655 3.215,15.998 C3.657,17.348 4.459,18.510 5.499,19.396 C4.800,19.552 4.079,19.631 3.343,19.631 C2.954,19.631 2.577,19.609 2.222,19.565 C2.141,19.556 2.061,19.551 1.981,19.551 C1.148,19.551 0.391,20.078 0.108,20.886 C-0.202,21.770 0.140,22.753 0.932,23.249 C3.764,25.023 7.318,26.000 10.939,26.000 C17.778,26.000 22.025,22.843 24.383,20.195 C27.243,16.984 28.907,12.718 28.972,8.455 C29.899,7.682 30.717,6.790 31.410,5.792 C31.661,5.458 31.810,5.041 31.810,4.590 C31.810,3.909 31.473,3.308 30.958,2.946 C31.181,2.176 30.925,1.342 30.303,0.833 C29.940,0.537 29.496,0.386 29.049,0.386 C28.708,0.386 28.365,0.474 28.056,0.654 C27.391,1.040 26.680,1.344 25.931,1.562 C24.555,0.592 22.688,-0.000 20.877,-0.000 L20.877,-0.000 Z"></path>{" "}
                </g>
              </svg>
            </a>

            <a href="#">
              <svg
                className="size-7"
                fill="#ffffff"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                    fill-rule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
          {/* Quick share section ends */}

          {/* Carousel section starts */}
          <div
            data-hs-carousel='{
              "loadingClasses": "opacity-0"
            }'
            class="relative"
            id="story"
          >
            <div class="hs-carousel relative overflow-hidden w-full h-100vh bg-white">
              <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div class="hs-carousel-slide">
                  <div class="flex justify-left h-full slide slide_two p-12">
                    <span class="self-center text-4xl transition duration-700 p-2 ">
                      <p className="lg:text-4xl md:text-2xl sm:3xl text-white font-bold mb-0 relative">
                        Partner <br />
                        Webinar Series
                      </p>

                      <p className="text-lg sm:xl text-white relative">
                        Coffee Conversation for Thoughts Leaders
                      </p>

                      <button
                        type="button"
                        class=" text-start py-2 px-4 text-white text-sm font-semibold rounded-lg relative   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Know more
                      </button>
                    </span>
                  </div>
                </div>
                <div class="hs-carousel-slide">
                  <div class="flex justify-left h-full slide_three p-12">
                    <span class="self-center text-4xl transition duration-700 p-2 ">
                      <p className="lg:text-4xl md:text-2xl sm:3xl text-white font-bold mb-0 relative">
                        Partner <br />
                        Webinar Series
                      </p>

                      <p className="text-lg sm:xl text-white relative">
                        Coffee Conversation for Thoughts Leaders
                      </p>

                      <button
                        type="button"
                        class=" text-start py-2 px-4 text-white text-sm font-semibold rounded-lg relative   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Know more
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
            >
              <span class="text-2xl carousel-indicator" aria-hidden="true">
                <svg
                  class="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              type="button"
              class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
            >
              <span class="sr-only">Next</span>
              <span class="text-2xl carousel-indicator" aria-hidden="true">
                <svg
                  class="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </button>

            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
              <span class="hs-carousel-active:bg-blue-600 hs-carousel-active:border-blue-600 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              <span class="hs-carousel-active:bg-blue-600 hs-carousel-active:border-blue-600 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              <span class="hs-carousel-active:bg-blue-600 hs-carousel-active:border-blue-600 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            </div>
          </div>
          {/* Carousel section ends */}
        </div>

        {/* Banner section ends */}

        {/* flavours content section starts */}
        <div className="col-12 bg-webinar-section" id="flavours">
          <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div class=" text-center mx-auto">
                <h1 class="block text-3xl font-bold text-white sm:text-4xl md:text-3xl dark:text-white">
                  Stirring Up Conversations Over Coffee!{" "}
                </h1>
                <p class="mt-3 text-md text-gray-300 dark:text-gray-400">
                  From a variety of topics to choose from, every talk in the
                  series corresponds to a flavor and an intensity
                  <br />
                  Blend the flavor with the intensity you enjoy and get the
                  conversation of your choice.
                </p>
              </div>

              <div class="mt-10 relative max-w-5xl mx-auto">
                <div className="row">
                  {/* accordion section starts */}
                  <div className="col-lg-6 col-md-7 col-sm-12 my-auto">
                    <p className="font-base text-3xl text-red-600">Flavour</p>
                    <div class="hs-accordion-group">
                      <div
                        class="hs-accordion active px-3"
                        id="hs-basic-heading-onee"
                      >
                        <button
                          class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 p-0 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                          aria-controls="hs-basic-collapse-onee"
                        >
                          <div className="accord_icon">
                            <svg
                              class="hs-accordion-active:hidden block size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                            <svg
                              class="hs-accordion-active:block hidden size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </div>
                          Technology
                        </button>
                        <div
                          id="hs-basic-collapse-onee"
                          class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                          aria-labelledby="hs-basic-heading-one"
                        >
                          <p class="text-gray-800 text-sm dark:text-gray-200 px-5">
                            Teach talks on evolving trends and deeper
                            <br />
                            aspects of cybersecurity.Brewed to <br />
                            perfection for technology connoisseurs.s
                          </p>
                        </div>
                      </div>

                      <div class="px-3  mx-1  text-white">
                        <div class="px-2 pb-3 lh-7">
                          . <br />.<br />. <br />
                        </div>
                      </div>

                      <div class="hs-accordion px-3" id="hs-basic-heading-two">
                        <button
                          class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                          aria-controls="hs-basic-collapse-twoo"
                        >
                          <div className="accord_icon">
                            <svg
                              class="hs-accordion-active:hidden block size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                            <svg
                              class="hs-accordion-active:block hidden size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </div>{" "}
                          Business
                        </button>
                        <div
                          id="hs-basic-collapse-twoo"
                          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          aria-labelledby="hs-basic-heading-twoo"
                        >
                          <p class="text-gray-800 dark:text-gray-200 px-5">
                            Learn about the latest trends in
                            <br />
                            cybersecurity.
                          </p>
                        </div>
                      </div>

                      <div class="px-3 mx-1  text-white">
                        <div class="px-2 pb-3 lh-7">
                          . <br />.<br />. <br />
                        </div>
                      </div>

                      <div
                        class="hs-accordion px-3"
                        id="hs-basic-heading-three2"
                      >
                        <button
                          class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                          aria-controls="hs-basic-collapse-threee"
                        >
                          <div className="accord_icon">
                            <svg
                              class="hs-accordion-active:hidden block size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                            <svg
                              class="hs-accordion-active:block hidden size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </div>{" "}
                          Visionary
                        </button>
                        <div
                          id="hs-basic-collapse-threee"
                          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          aria-labelledby="hs-basic-heading-two"
                        >
                          <p class="text-gray-800 dark:text-gray-200 px-5">
                            Learn about the latest trends in
                            <br />
                            cybersecurity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accordion section ends */}
                  <div className="col-lg-6 col-md-5 col-sm-12 mt-4">
                    <div class="w-full object-cover h-96 sm:h-[300px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
                    <div class="absolute inset-0 size-full">
                      <div class="flex flex-col justify-center items-center size-full">
                        <a
                          class="py-4 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          <svg
                            class="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5 ">
                    <div className="col-lg-3 col-md-3 col-sm-12 text-center my-auto mt-3">
                      <span className="text-3xl font-base text-white">
                        Intensity
                      </span>
                    </div>
                    {/* Flavour cards starts */}
                    <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
                      <div class=" bg-cards rounded-xl text-center p-3 md:p-5 dark:border-gray-700">
                        <div class="flex justify-center items-center size-12  rounded-lg ">
                          <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill="#ffffff"
                                d="M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
                              ></path>
                            </g>
                          </svg>{" "}
                        </div>

                        <div class="mt-3">
                          <h3 class="text-sm text-start sm:text-lg font-semibold text-gray-100 dark:text-gray-200">
                            Mocha
                          </h3>

                          <p class="mb-0 text-sm text-start text-gray-100 dark:text-gray-400">
                            Light and relaxed talks for those who like
                            easy-going conversations sprinkled with insights.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
                      <div class=" bg-cards rounded-xl text-center p-3 md:p-5 dark:border-gray-700">
                        <div class="flex justify-center items-center size-12  rounded-lg ">
                          <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill="#ffffff"
                                d="M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
                              ></path>
                            </g>
                          </svg>{" "}
                        </div>

                        <div class="mt-3">
                          <h3 class="text-sm text-start sm:text-lg font-semibold text-gray-100 dark:text-gray-200">
                            Americano
                          </h3>

                          <p class="mb-0 text-sm text-start text-gray-100 dark:text-gray-400">
                            The perfect blend of acumen clubbed with friendly
                            wisdom for those looking to augment that knowledge .
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
                      <div class=" bg-cards rounded-xl text-center p-3 md:p-5 dark:border-gray-700">
                        <div class="flex justify-center items-center size-12  rounded-lg ">
                          <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ffffff"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill="#ffffff"
                                d="M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
                              ></path>
                            </g>
                          </svg>{" "}
                        </div>

                        <div class="mt-3">
                          <h3 class="text-sm text-start sm:text-lg font-semibold text-gray-100 dark:text-gray-200">
                            Espresso
                          </h3>

                          <p class="mb-0 text-sm text-start text-gray-100 dark:text-gray-400">
                            Intense and power-packed talks for those who love to
                            dive deep into your specific topics and feel the
                            flavour.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Flavour cards ends */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* flavours content section ends */}

        {/* Events section starts */}
        <div className="col-12 p-0" id="upcoming">
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
            <div class="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
              <h2 class="text-2xl text-white font-bold md:text-4xl md:leading-tight dark:text-white">
                Upcoming Events
              </h2>
              <p class="mt-1 text-gray-300 dark:text-gray-400">
                Attend a live webinar with industry stalwarts sharing their
                views, tips and vision on trends that are reinventing the way we
                work, live and function.Register for the upcoming webinar or
                choose as per your perference!
              </p>
            </div>

            {/* grid section starts */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* card section starts */}
              <div class="bg-events flex flex-col rounded-xl p-4 md:p-6  border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-4">
                  <div class="grow">
                    <button className="text-sm w-f-c text-white border border-gray-50 p-2 ">
                      Tread Cloud One
                    </button>
                    <div class="mt-3">
                      <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                        Workload
                        <br />
                        Security Demo
                      </h3>

                      <p class=" text-xs text-start text-gray-100 dark:text-gray-400">
                        06 Apr 2023 | 14:3 - 15:30 (SGST)
                      </p>

                      <p class="mb-0 font-bold text-md text-start text-gray-100 dark:text-gray-400">
                        SPEAKER:
                      </p>
                      <p class="mb-0 text-md text-start text-gray-100 dark:text-gray-400">
                        RODGERS KOESCH
                      </p>
                      <p class="text-red-900 text-sm text-start  dark:text-gray-400">
                        Technical Sales Engineer, Tread Micro
                      </p>

                      <p class=" text-md text-start text-gray-100 dark:text-gray-400">
                        EPISODE 01
                      </p>

                      <button
                        type="button"
                        class=" text-start py-2 px-4 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-events flex flex-col rounded-xl p-4 md:p-6  border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-4">
                  <div class="grow">
                    <button className="text-sm w-f-c text-white border border-gray-50 p-2 ">
                      Tread Vision One
                    </button>
                    <div class="mt-3">
                      <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                        Discover the
                        <br />
                        Undiscovered
                      </h3>

                      <p class=" text-xs text-start text-gray-100 dark:text-gray-400">
                        06 Apr 2023 | 14:3 - 15:30 (SGST)
                      </p>

                      <p class="mb-0 font-bold text-md text-start text-gray-100 dark:text-gray-400">
                        SPEAKER:
                      </p>
                      <p class="mb-0 text-md text-start text-gray-100 dark:text-gray-400">
                        AMISH DABHI
                      </p>
                      <p class="text-red-900 text-sm text-start  dark:text-gray-400">
                        Technical Sales Engineer, Tread Micro
                      </p>

                      <p class=" text-md text-start text-gray-100 dark:text-gray-400">
                        EPISODE 01
                      </p>

                      <button
                        type="button"
                        class=" text-start py-2 px-4 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-events flex flex-col rounded-xl p-4 md:p-6  border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
                <div class="flex items-center gap-x-4">
                  <div class="grow">
                    <button className="text-sm w-f-c text-white border border-gray-50 p-2 ">
                      Tread Workforce One
                    </button>
                    <div class="mt-3">
                      <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                        Introduction to
                        <br />
                        Email Security
                      </h3>

                      <p class=" text-xs text-start text-gray-100 dark:text-gray-400">
                        06 Apr 2023 | 14:3 - 15:30 (SGST)
                      </p>

                      <p class="mb-0 font-bold text-md text-start text-gray-100 dark:text-gray-400">
                        SPEAKER:
                      </p>
                      <p class="mb-0 text-md text-start text-gray-100 dark:text-gray-400">
                        BILAL ISSA
                      </p>
                      <p class="text-red-900 text-sm text-start  dark:text-gray-400">
                        Technical Sales Engineer, Tread Micro
                      </p>

                      <p class=" text-md text-start text-gray-100 dark:text-gray-400">
                        EPISODE 01
                      </p>

                      <button
                        type="button"
                        class=" text-start py-2 px-4 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* cards section ends */}
            </div>
            {/* grid section ends */}
          </div>
        </div>
        {/* Events section ends */}

        {/* ondemand section starts */}
        <div className="col-12 p-0" id="ondemand">
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-webinar-section">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 class="text-2xl text-white font-bold md:text-4xl md:leading-tight dark:text-white">
                Webinar Showcase
              </h2>
              <p class="mt-1 text-gray-300 dark:text-gray-400">
                Watch the recordings of some of our best received webinar,
                on-demand. Sip, pause, ponder, play-enjoy your cold brews the
                way you like them!
              </p>
            </div>
            {/* grid section starts */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* cards section starts */}
              <div class="relative h-f-c   shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  class="w-full h-auto rounded-xl"
                  src={eventsbanner}
                  alt="Image Description"
                />
                <div class="absolute bottom-0 start-0 end-0">
                  <div class="p-4 md:p-5">
                    <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                      Introduction to
                      <br />
                      Email Security
                    </h3>

                    <button
                      type="button"
                      class=" text-start py-2 px-4 mt-3 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="relative h-f-c   shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  class="w-full h-auto rounded-xl"
                  src={eventsbanner}
                  alt="Image Description"
                />
                <div class="absolute bottom-0 start-0 end-0">
                  <div class="p-4 md:p-5">
                    <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                      Trend Managed
                      <br />
                      Service Partner
                    </h3>

                    <button
                      type="button"
                      class=" text-start py-2 px-4 mt-3 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="relative h-f-c   shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  class="w-full h-auto rounded-xl"
                  src={eventsbanner}
                  alt="Image Description"
                />
                <div class="absolute bottom-0 start-0 end-0">
                  <div class="p-4 md:p-5">
                    <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                      Services
                      <br />& Support
                    </h3>

                    <button
                      type="button"
                      class=" text-start py-2 px-4 mt-3 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="relative h-f-c   shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  class="w-full h-auto rounded-xl"
                  src={eventsbanner}
                  alt="Image Description"
                />
                <div class="absolute bottom-0 start-0 end-0">
                  <div class="p-4 md:p-5">
                    <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                      Threat
                      <br />
                      Landscape
                    </h3>

                    <button
                      type="button"
                      class=" text-start py-2 px-4 mt-3 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="relative h-f-c   shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  class="w-full h-auto rounded-xl"
                  src={eventsbanner}
                  alt="Image Description"
                />
                <div class="absolute bottom-0 start-0 end-0">
                  <div class="p-4 md:p-5">
                    <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                      Trend
                      <br />
                      Vision One
                    </h3>

                    <button
                      type="button"
                      class=" text-start py-2 px-4 mt-3 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div class="relative h-f-c   shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  class="w-full h-auto rounded-xl"
                  src={eventsbanner}
                  alt="Image Description"
                />
                <div class="absolute bottom-0 start-0 end-0">
                  <div class="p-4 md:p-5">
                    <h3 class="text-md text-start sm:text-lg font-bold text-gray-100 dark:text-gray-200">
                      Trend
                      <br />
                      Work Force One
                    </h3>

                    <button
                      type="button"
                      class=" text-start py-2 px-4 mt-3 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
              {/* cards section ends */}
            </div>
            {/* grid section ends */}
          </div>
        </div>
        {/* ondemand section ends */}

        {/* testimonial sectiom starts */}

        <div className="col-12 p-0">
          <div class="max-w-[85rem] px-5 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 class="text-2xl text-red-600 font-bold md:text-4xl md:leading-tight dark:text-white">
                Brewing Success
              </h2>
              <p class="mt-1 text-xl text-red-600 dark:text-gray-400">
                Partner Testimonials that perk us up!
              </p>
            </div>
            {/* carousel section starts */}
            <div
              data-hs-carousel='{
              "loadingClasses": "opacity-0"
            }'
              class="relative"
              id="story"
            >
              <div class="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full  p-6">
                      <span class="self-center text-4xl transition duration-700">
                        <div class="relative max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-14 mx-auto">
                          <blockquote class="text-center lg:mx-auto lg:w-3/5">
                            <div class=" lg:mt-5">
                              <p class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                                <svg
                                  class="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span class="relative z-10 italic text-gray-800 dark:text-gray-200">
                                  A cup of coffee is an excuse to share great
                                  thoughts with great minds
                                </span>
                              </p>
                            </div>

                            <footer class="mt-6">
                              <div class="font-semibold text-lg text-red-600 dark:text-gray-200">
                                John Doe
                              </div>
                              <div class="text-sm text-red-600">Elementz</div>
                            </footer>
                          </blockquote>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full  p-6">
                      <span class="self-center text-4xl transition duration-700">
                        <div class="relative max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-14 mx-auto">
                          <blockquote class="text-center lg:mx-auto lg:w-3/5">
                            <div class=" lg:mt-5">
                              <p class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                                <svg
                                  class="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span class="relative z-10 italic text-gray-800 dark:text-gray-200">
                                  Coffee, to me, is more than just a drink; it's
                                  an elixir that unlocks the door to rich
                                  conversations and shared brilliance.
                                </span>
                              </p>
                            </div>

                            <footer class="mt-6">
                              <div class="font-semibold text-lg text-red-600 dark:text-gray-200">
                                Ashish Dal
                              </div>
                              <div class="text-sm text-red-600">Elementz</div>
                            </footer>
                          </blockquote>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="hs-carousel-slide">
                    <div class="flex justify-center h-full  p-6">
                      <span class="self-center text-4xl transition duration-700">
                        <div class="relative max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-14 mx-auto">
                          <blockquote class="text-center lg:mx-auto lg:w-3/5">
                            <div class=" lg:mt-5">
                              <p class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                                <svg
                                  class="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
                                  width="16"
                                  height="13"
                                  viewBox="0 0 16 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span class="relative z-10 italic text-gray-800 dark:text-gray-200">
                                  In the realm of great thoughts, a cup of
                                  coffee is the unspoken catalyst, transforming
                                  routine into a delightful rendezvous with
                                  inspiration.
                                </span>
                              </p>
                            </div>

                            <footer class="mt-6">
                              <div class="font-semibold text-lg text-red-600 dark:text-gray-200">
                                Ashley Jan
                              </div>
                              <div class="text-sm text-red-600">Elementz</div>
                            </footer>
                          </blockquote>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
              >
                <span class="text-2xl carousel-indicator" aria-hidden="true">
                  <svg
                    class="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                type="button"
                class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
              >
                <span class="sr-only">Next</span>
                <span class="text-2xl carousel-indicator" aria-hidden="true">
                  <svg
                    class="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </button>

              <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <span class="hs-carousel-active:bg-red-600 hs-carousel-active:border-red-600 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span class="hs-carousel-active:bg-red-600 hs-carousel-active:border-red-600 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span class="hs-carousel-active:bg-red-600 hs-carousel-active:border-red-600 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              </div>
            </div>
            {/* carousel section ends */}
          </div>
        </div>

        {/* testimonial section ends */}

        {/* contactus section starts */}

        <div className="col-12 p-0" id="contactus">
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-talktous">
            <div class="max-w-3xl mx-auto">
              <div class="text-center">
                <h2 class="text-2xl text-white font-bold md:text-4xl md:leading-tight dark:text-white">
                  Talk to us?{" "}
                </h2>
              </div>

              <div class="mt-12">
                {/* Form section starts */}
                <form>
                  <div class="grid gap-4 lg:gap-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none "
                          placeholder="Enter First Name"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none "
                          placeholder="Enter Last Name"
                        />{" "}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none "
                          placeholder="Enter Email Address"
                        />{" "}
                      </div>

                      <div>
                        <select
                          class="form-select py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none "
                          aria-label="Default select example"
                        >
                          <option selected>Select Topic</option>
                          <option value="1">Topic 1</option>
                          <option value="2">Topic 2</option>
                          <option value="3">Topic 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 text-center mt-6">
                    <button
                      type="submit"
                      class=" text-center w-f-c py-2 px-4 text-white text-md font-semibold rounded-lg   bg-red-600  hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/* Form section starts */}
              </div>
            </div>
          </div>
        </div>

        {/* contactus section ends */}

        {/* faq section starts */}

        <div className="col-12 p-0 " id="faq">
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-webinar-section">
            <div class="max-w-6xl mx-auto  mb-10 lg:mb-14">
              <h2 class="text-2xl text-white text-center font-bold md:text-4xl md:leading-tight dark:text-white">
                FAQs
              </h2>
              <div className="row mt-5">
                {/* accordion section starts */}
                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                  <div class="hs-accordion-group">
                    <div
                      class="hs-accordion active px-3"
                      id="hs-basic-heading-one"
                    >
                      <button
                        class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 p-0 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-collapse-one"
                      >
                        <div className="accord_icon">
                          <svg
                            class="hs-accordion-active:hidden block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          <svg
                            class="hs-accordion-active:block hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </div>
                        What does flavour means?
                      </button>
                      <div
                        id="hs-basic-collapse-one"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-one"
                      >
                        <p class="text-gray-800 text-sm dark:text-gray-200 px-5">
                          Flavour signifies the topic types.We're foucuing on
                          relevant topics which help expand your knowledge and
                          understanding.Our talks are broadly classifies into
                          the following categories:
                          <ul class="list-disc list-inside mt-2 text-gray-800 dark:text-white">
                            <li>
                              Business: Focussed on the business aspect of
                              technology
                            </li>
                            <li>
                              Visionary: Thought leadership talks focussed on
                              changing trends, emerging trend and other aspects
                              which influence industry behaviour
                            </li>
                            <li>
                              Technology: For the needs who are interested in
                              understand behind thescenes
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>

                    <div class="px-3  mx-1  text-white">
                      <div class="px-2 pb-3 lh-7">
                        . <br />.<br />. <br />
                      </div>
                    </div>

                    <div class="hs-accordion px-3" id="hs-basic-heading-two">
                      <button
                        class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-collapse-two"
                      >
                        <div className="accord_icon">
                          <svg
                            class="hs-accordion-active:hidden block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          <svg
                            class="hs-accordion-active:block hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </div>{" "}
                        What does it mean by intensity?
                      </button>
                      <div
                        id="hs-basic-collapse-two"
                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-two"
                      >
                        <p class="text-gray-800 dark:text-gray-200 px-5">
                          Intensity is a measure of the urgency of a particular
                          topic.
                        </p>
                      </div>
                    </div>

                    <div class="px-3 mx-1  text-white">
                      <div class="px-2 pb-3 lh-7">
                        . <br />.<br />. <br />
                      </div>
                    </div>

                    <div class="hs-accordion px-3" id="hs-basic-heading-three">
                      <button
                        class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-collapse-three"
                      >
                        <div className="accord_icon">
                          <svg
                            class="hs-accordion-active:hidden block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          <svg
                            class="hs-accordion-active:block hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </div>{" "}
                        Can we nominate topics of our choice?
                      </button>
                      <div
                        id="hs-basic-collapse-three"
                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-two"
                      >
                        <p class="text-gray-800 dark:text-gray-200 px-5">
                          Yes, you can nominate topics of your choice.
                        </p>
                      </div>
                    </div>

                    <div class="px-3 mx-1 text-white">
                      <div class="px-2 pb-3 lh-7">
                        . <br />.<br />. <br />
                      </div>
                    </div>

                    <div class="hs-accordion px-3" id="hs-basic-heading-four">
                      <button
                        class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-collapse-four"
                      >
                        <div className="accord_icon">
                          <svg
                            class="hs-accordion-active:hidden block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          <svg
                            class="hs-accordion-active:block hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </div>{" "}
                        Can we share snippets to our social platform?
                      </button>
                      <div
                        id="hs-basic-collapse-four"
                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-two"
                      >
                        <p class="text-gray-800 dark:text-gray-200 px-5">
                          Yes, you can share snippets to our social platform.
                        </p>
                      </div>
                    </div>

                    <div class="px-3 mx-1  text-white">
                      <div class="px-2 pb-3 lh-7">
                        . <br />.<br />. <br />
                      </div>
                    </div>

                    <div class="hs-accordion px-3" id="hs-basic-heading-five">
                      <button
                        class="hs-accordion-toggle hs-accordion-active:text-gray-900 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-100 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-collapse-five"
                      >
                        <div className="accord_icon">
                          <svg
                            class="hs-accordion-active:hidden block size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          <svg
                            class="hs-accordion-active:block hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </div>{" "}
                        What time is the webinar? What time zonoe is "SGT"?
                      </button>
                      <div
                        id="hs-basic-collapse-five"
                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-heading-two"
                      >
                        <p class="text-gray-800 dark:text-gray-200 px-5">
                          10:00 AM - 11:00 AM (SGT){" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* accordion section ends */}
                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                  <img src={faq} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* faq section ends */}

        {/* footer section starts */}

        <div className="col-12 p-5  bg-black">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <a
                class="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                aria-label="Brand"
              >
                <img src={logo} className="size-10 w-auto" />
              </a>
            </div>
            {/* social media icons section starts */}
            <div className="col-lg-6 col-md-6 col-sm-6 sm-text-start text-end mt-3 mb-3">
              <div>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </a>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* social media icons section ends */}

            <div className="col-12">
              <div class="mt-2 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                <div class="flex justify-between items-center">
                  <p class="text-sm text-gray-400">Privacy Policy | Legal</p>
                </div>

                <div className="text-sm text-gray-400">
                  Copyrights @ 2022 Trend Micro Incorporated. All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer section ends */}
      </div>
    </div>
  );
}
