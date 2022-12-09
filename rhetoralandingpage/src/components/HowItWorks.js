import React from "react";
import HowItWorksMobile from "./HowItWorksMobile";

const HowItWorks = () => {
  return (
    <div>
      <div
        className="p-4 md:p-20 flex flex-col items-center"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <p className="font-anek text-minor text-4xl font-semibold">
          How rhetora Works
        </p>
        {/* Tabs section */}
        <div className="hidden md:block my-20 bg-white w-full rounded-2xl md:p-20">
          <div>
            <div class="mb-4 border-b border-gray-200 ">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 font-anek"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    UNLIMITED MOCK CALLS
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                    id="visualize-talk-track"
                    data-tabs-target="#visualizeTalkTrack"
                    type="button"
                    role="tab"
                    aria-controls="visualizeTalkTrack"
                    aria-selected="false"
                  >
                    VISUALIZE TALK TRACK
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
                    id="script-builder"
                    data-tabs-target="#scriptBuilder"
                    type="button"
                    role="tab"
                    aria-controls="scriptBuilder"
                    aria-selected="false"
                  >
                    SCRIPT BUILDER
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
                    id="ai-suggestions"
                    data-tabs-target="#aiSuggestion"
                    type="button"
                    role="tab"
                    aria-controls="aiSuggestion"
                    aria-selected="false"
                  >
                    AI SUGGESTIONS
                  </button>
                </li>
                <li role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
                    id="analytics-insights"
                    data-tabs-target="#analyticsInsights"
                    type="button"
                    role="tab"
                    aria-controls="analyticsInsights"
                    aria-selected="false"
                  >
                    ANALYTICS & INSIGHTS
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div
                class="hidden"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-lg font-semibold uppercase text-minor">
                      Unlimited Mock Calls
                    </p>
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Dont Limit Yourself
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                          Managers tend to have only a couple of minutes a day
                          to address important matters, even less time to be
                          training their team.
                        </li>
                        <li>
                          Rhetora is patient. Allow sales reps to practice cold
                          calling offline in a stress-free enviroment proven to
                          best method to introducing new scripts and roles.
                        </li>
                      </ul>
                    </div>
                    <div className="m-4 border-l-4 border-minor p-1">
                      <p className="ml-4 text-2xl font-semibold font-anek text-subheading">
                        Train your team for the real world
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6">
                    <img
                      src={
                        require("../assets/unlimited mock calls.svg").default
                      }
                      alt="hero"
                      className="float-right"
                    />
                  </div>
                </div>
              </div>
              <div
                class="hidden"
                id="visualizeTalkTrack"
                role="tabpanel"
                aria-labelledby="visualize-talk-track"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-lg font-semibold uppercase text-minor">
                      Visualize Talk Track
                    </p>
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Navigate Conversation
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                          Get comfortable navigating cold call conversations. No
                          more panic scrolling to find an objection rebuttel.
                        </li>
                        <li>
                          Real-time call navigation with a visualized flow of
                          your call script. Have AI hand hold you all the way to
                          booking a meeting.
                        </li>
                      </ul>
                    </div>
                    <div className="m-4 border-l-4 border-minor p-1">
                      <p className="ml-4 text-2xl font-semibold font-anek text-subheading">
                        Never lose track of your call again.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6">
                    <img
                      src={
                        require("../assets/visualize-talk-track.svg").default
                      }
                      alt="hero"
                      className="float-right"
                    />
                  </div>
                </div>
              </div>
              <div
                class="hiddendark:bg-gray-800"
                id="scriptBuilder"
                role="tabpanel"
                aria-labelledby="script-builder"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-lg font-semibold uppercase text-minor">
                      Script Builder
                    </p>
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Tailor It. How You Desire It.
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                          Why practice generic and unrelated scripts? Most reps
                          don’t find their voice in cold calls. The struggle
                          ends now with rhetora.
                        </li>
                        <li>
                          Why practice generic and unrelated scripts? Most reps
                          don’t find their voice in cold calls. The struggle
                          ends now with rhetora.
                        </li>
                      </ul>
                    </div>
                    <div className="m-4 border-l-4 border-minor p-1">
                      <p className="ml-4 text-2xl font-semibold font-anek text-subheading">
                        Get it tailored or don’t wear it.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6">
                    <img
                      src={require("../assets/script-builder.svg").default}
                      alt="hero"
                      className="float-right"
                    />
                  </div>
                </div>
              </div>
              <div
                class="hiddendark:bg-gray-800"
                id="aiSuggestion"
                role="tabpanel"
                aria-labelledby="ai-suggestions"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-lg font-semibold uppercase text-minor">
                      AI Suggestions
                    </p>
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Expert Recommendations
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                          60% of reps find objection handles from searching the
                          internet, leaving them with sub-par and unrelated
                          solutions.
                        </li>
                        <li>
                          Don’t think twice about finding a winning rebuttal,
                          have rhetora suggest the rebuttal with the highest win
                          rates.
                        </li>
                      </ul>
                    </div>
                    <div className="m-4 border-l-4 border-minor p-1">
                      <p className="ml-4 text-2xl font-semibold font-anek text-subheading">
                        Leaving you with time to do what you do best, selling.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6">
                    <img
                      src={
                        require("../assets/unlimited mock calls.svg").default
                      }
                      alt="hero"
                      className="float-right"
                    />
                  </div>
                </div>
              </div>
              <div
                class="hiddendark:bg-gray-800"
                id="analyticsInsights"
                role="tabpanel"
                aria-labelledby="analytics-insights"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-lg font-semibold uppercase text-minor">
                      Analytics & Insights
                    </p>
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      An Insider’s View
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg list-disc list-inside text-gray-500 dark:text-gray-400">
                        <li>
                          Managers must aquire the ability to lead and guide
                          their champions to the path of victory by making the
                          right decisions
                        </li>
                        <li>
                          Help your champions win more by learning who needs
                          coaching and what skills need to be developed based on
                          our insighs & analytics. Track quantiffiable
                          improvements over time, and prove the impact of your
                          programs
                        </li>
                      </ul>
                    </div>
                    <div className="m-4 border-l-4 border-minor p-1">
                      <p className="ml-4 text-2xl font-semibold font-anek text-subheading">
                        Reward your champions. Coach your champions. Cultivate a
                        winning sales team with data.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6">
                    <img
                      src={
                        require("../assets/unlimited mock calls.svg").default
                      }
                      alt="hero"
                      className="float-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <HowItWorksMobile />
        {/* Mobile View */}
        {/* Promotion banner */}
        <div className="hidden md:block -mb-28 bg-minorlight max-w-5xl rounded-lg px-10 py-16">
          <div className="flex items-center justify-between gap-16">
            <p className="text-2xl text-white font-anek">
              Ready to explode your response rates?
            </p>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-main focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-minor focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block p-4 bg-white md:p-20 flex flex-col items-center">
        {/* another tabs section */}
        <div
          className="mb-20 mt-40 w-full rounded-2xl md:p-20"
          style={{ backgroundColor: "#F8F8F9" }}
        >
          <div>
            <div class="mb-4 border-b border-gray-200">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#mySalesTabContent"
                role="tablist"
              >
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 font-anek"
                    id="sales-leaders"
                    data-tabs-target="#salesLeaders"
                    type="button"
                    role="tab"
                    aria-controls="salesLeaders"
                    aria-selected="false"
                  >
                    Sales Leaders
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                    id="sales-rep"
                    data-tabs-target="#salesRep"
                    type="button"
                    role="tab"
                    aria-controls="salesRep"
                    aria-selected="false"
                  >
                    Sales Rep
                  </button>
                </li>
                <li class="mr-2" role="presentation">
                  <button
                    class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
                    id="enterpreneur-tab"
                    data-tabs-target="#enterpreneurs"
                    type="button"
                    role="tab"
                    aria-controls="enterpreneurs"
                    aria-selected="false"
                  >
                    Enterpreneurs
                  </button>
                </li>
              </ul>
            </div>
            <div id="mySalesTabContent">
              <div
                class="hidden"
                id="salesLeaders"
                role="tabpanel"
                aria-labelledby="sales-leaders"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Lead Your Champions.
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg text-gray-500 dark:text-gray-400">
                        <li>
                          Train your champions for the real world by providing a
                          scalable solution to cold call training.
                        </li>
                        <li>
                          Track your team’s progress and assess if they are
                          ready to face prospects.
                        </li>
                        <li>
                          Enable your salesforce to give the best first
                          impression when speaking to clients.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        class="text-white bg-minor hover:bg-minorlight focus:outline-none focus:ring-4 focus:ring-minor font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Book Demo
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6 relative">
                    <img
                      src={
                        require("../assets/lead-your-championship.svg").default
                      }
                      alt="hero"
                      className="float-right  z-10"
                    />
                    <img
                      src={
                        require("../assets/lead-your-championship-2.svg")
                          .default
                      }
                      alt="hero"
                      className="absolute -right-16 bottom-0 w-72 z-30"
                    />
                  </div>
                </div>
              </div>
              <div
                class="hidden"
                id="salesRep"
                role="tabpanel"
                aria-labelledby="sales-rep"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Practice To Mastery.
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg text-gray-500 dark:text-gray-400">
                        <li>
                          Practice your desired scripts unlimitely without
                          burning your lead list.
                        </li>
                        <li>
                          Stress-free solution to mastering your cold calling
                          scripts and roles.
                        </li>
                        <li>
                          Visualize and track the flow of your conversations.
                          Have AI guide you through all the way to booking a
                          meeting.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        class="text-white bg-minor hover:bg-minorlight focus:outline-none focus:ring-4 focus:ring-minor font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Get Access
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6 relative">
                    <img
                      src={require("../assets/sales-rep.svg").default}
                      alt="hero"
                      className="float-right  z-10"
                    />
                  </div>
                </div>
              </div>
              <div
                class="hidden"
                id="enterpreneurs"
                role="tabpanel"
                aria-labelledby="enterpreneur-tab"
              >
                <div className="container md:px-10 pt-16 mx-auto flex flex-col-reverse md:flex md:flex-row items-center justify-between w-100">
                  <div className="font-inter w-full text-start md:w-3/6">
                    <p className="font-anek text-5xl font-bold text-main mt-6">
                      Pitch Perfectly.
                    </p>
                    <div className="mt-6">
                      <ul className="space-y-4 max-w-lg text-gray-500 dark:text-gray-400">
                        <li>
                          Investors are some of the busiest personas to call on.
                          These professionals require the up-most perfection
                          when cold calling.
                        </li>
                        <li>
                          Be able to effectively convey your pitch without
                          repelling investors on the phone.
                        </li>
                        <li>
                          Book that intro meeting with investors by pitching
                          perfectly, practice your pitch to perfection.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        class="text-white bg-minor hover:bg-minorlight focus:outline-none focus:ring-4 focus:ring-minor font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Book Demo
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-3/6 relative">
                    <img
                      src={require("../assets/Enterpreneurs.svg").default}
                      alt="hero"
                      className="float-right  z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;