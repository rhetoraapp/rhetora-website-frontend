import {React,useEffect} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/EarlyAccessForm.css";
import ReactGA from "react-ga";
import FooterSubscriber from "../components/FooterSubscriber";
import CommunityPageForm from "../components/forms/CommunityPageForm";
const image1 = require("../assets/network-like-minded.svg").default;
const image2 = require("../assets/learn-from industry.svg").default;
const image3 = require("../assets/real-sense-of-belonging.svg").default;

const Community = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[]);
  const exclusiveAccess = [
    {
      id: 1,
      title: "Network with like-minded",
      p1: "Networking is an essential part of the sales profession. By building connections with other professionals, we can learn from their experiences, gain valuable insights, and even find new leads and opportunities.",
      p2: "The rhetora Community is a great place to network with other sales professionals. Our active slack channel is a hub for discussion and networking, where members can connect with each other and build valuable relationships.",
      image: image1,
    },
    {
      id: 2,
      title: "Learn from industry leaders",
      p1: "Collaborating with like-minded people is essential to the success of any career, let alone in sales. Our members work together and share ideas, we learn from each other, improve our skills, and achieve our goals more effectively.",
      p2: "The rhetora Community provides a platform for sales professionals to collaborate and share best practices. Our slack channel is where members bounce ideas off of one another and seek advice from experienced professionals.",
      image: image2,
    },
    {
      id: 3,
      title: "A real sense of belonging",
      p1: "Belonging is an important aspect of any professional environment. The rhetora Community creates a sense of belonging for sales professionals by constantly encouraging genuine conversation, real life events and a chill environment. Our meme slack channel is the most active slack channel.",
      image: image3,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="md:container pt-32 pb--32 mx-auto flex flex-col items-center justify-between w-100">
        <div className="text-center px-10 flex flex-col items-center">
          <p className="text-4xl md:text-5xl text-main font-bold">
            Become a <span className="text-minor">Rhetorian</span>
          </p>
          <p className="text-4xl md:text-5xl text-main font-bold">
            Become a <span className="text-minor">Champion</span>
          </p>
          <p className="w-full md:w-2/3 mt-6 text-lg">
            Are you tired of feeling alone in your sales job? Do you want to
            connect with like-minded professionals to bounce ideas off of and
            improve your skills? If so, you're in the right place. rhetora
            Community is a vibrant and active Slack channel with hundreds of
            sales professionals from all industries and experience levels
          </p>
          <CommunityPageForm />
          
        </div>
        <div className="md:hidden w-full">
          <img
            src={require("../assets/community-main-mobile.svg").default}
            alt="community"
            className="mx-auto w-full md:w-full"
            style={{ transform: 'translateY(-100px)' }}
          />
        </div>
        <div id="com" className="hidden md:block w-full">
          <img
            src={
              require("../assets/main-community-with-color-blur.svg").default
            }
            alt="community"
            className="mx-auto w-full md:w-full"
          />
        </div>
        <div id="com2" className="px-10">
          <div className="">
            <p className="text-3xl md:text-6xl text-center text-main font-bold">
              Exclusive Access Includes
            </p>
            <p className="text-base text-center text-main">
              Access to Over 100+ sales professionals across the world
              connecting daily
            </p>
          </div>
          <div className="mt-16">
            {exclusiveAccess.map((item) => (
              <div
                key={item.id}
                className="mt-16 flex flex-col md:flex-row gap-24 items-center"
              >
                <div className="md:w-1/2">
                  <img src={item.image} alt="network" className="w-full" />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-2xl mb-2 text-main font-bold  ">
                    {item.title}
                  </p>
                  <p className="text-base text-main w-full md:w-5/6">
                    {item.p1}
                  </p>
                  {item.p2 && (
                    <p className="text-base text-main border-none my-2 w-full md:w-5/6">
                      {item.p2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSubscriber id="com2" title="Join the community save your quota"/>
      <Footer id="com2"/>
    </div>
  );
};

export default Community;
