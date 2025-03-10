import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import project1 from "../img/project1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Apoorv",
  lastName: "Gupta",
  initials: "AG", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by tea",
    },
    {
      emoji: "🌎",
      text: "based in India",
    },
    {
      emoji: "🎓",
      text: "Computer Science Student",
    },
    {
      emoji: "📧",
      text: "guptaapoorv4705@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.youtube.com/@cloudwalker2186",
      icon: "fa fa-youtube",
      label: "youtube",
    },

    {
      link: "https://github.com/apoorvcurry21",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/apoorvg21",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],

  bio: "Hello! I'm Apoorv, a passionate full-stack developer who loves building web apps. I enjoy learning new technologies and constantly improving my skills. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "table tennis",
      emoji: "🏓",
    },
    {
      label: "basketball",
      emoji: "🏀",
    },
    {
      label: "tennis",
      emoji: "🎾",
    },
    {
      label: "making YouTube videos",
      emoji: "🎥",
    },
  ],

  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "SpinSync: Table Tennis Finder",
      live: "https://spin-sync-fawn.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/apoorvcurry21/SpinSync", // this should be a link to the **repository** of the project, where the code is hosted.
      image: project1,
    }
  ],
};
