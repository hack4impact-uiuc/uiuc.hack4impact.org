import React from "react";
import Interview from "../public/icons/interview.svg"
import ActionButton from "../components/actionButton";
import Contract from "../public/icons/contract.svg";
import Education from "../public/icons/education.svg";

// constants that will affect links in the student application page
// const externalApplicationLink = "https://forms.gle/Sh8C2LLgGeiV25tD6"; // sp21
// const techApplicationLink = "https://forms.gle/acSm9mRfyH6MBhAa6"; // sp21
const applicationLink =
  "https://h4i.app/apply";
const interestLink = "http://bit.ly/h4i-uiuc-fa21-interest"; //fa21
const infoNightLink = "https://h4i.app/info-night"; //fa21

// current stuff
const currentSemester = "Fall 2021";
//const nextSemester = "Fall 2021";

// dates
const infoSessionDate = "Wednesday, August 25  6:30-7:30 PM CDT"; //Wed Aug 25, 2021 6:30-7:30PM
const applicationReleaseDate = "Opens Wednesday, August 18"; // Wed Aug 18, 2021
const applicationReleaseTime = "6:00 PM CT";
const applicationDueDate = "Due Sunday, August 29"; // Sun, Aug 29
const applicationDueTime = "11:59 PM Central Time"; // 11:59 PM CST
const firstRoundInterviewDate = "Wednesday, September 1 - Thursday, September 2"; //Mon - Tue Feb 1 - 2, 2021
const secondRoundInterviewDate = "Tuesday, September 7 - Wednesday, September 8"; // Tues-Wed Sept 7-8, 2021
const socialRoundDate = "Saturday, September 4"; //Sat Sept 4, 2021
// const takeHomeExerciseDate = "Due Tuesday, February 2"; //Tue, Feb 2, 2021
const productDesignInterviewDate = "Saturday, September 11"; // Sat Sept 11, 2021 

const subHeadline =
  "Students are a core part of what makes Hack4Impact. Joining Hack4Impact is the perfect way to give back while developing new skills and making long-lasting friendships.";
const quote = {
  text:
    "A lot of classwork is theoretical. You’re given a contrived problem, and then you solve it. At Hack4Impact, you get to build a product from the ground up. Being exposed to building something from scratch is a great experience as a student.",
  source: "Alex Wu",
  sourceTitle: "'16",
};

const faq = [
  {
    question: "What is the general premise of Hack4Impact?",
    answer: (
      <>
        <p>
          <i>Team:</i> Work on a team of 6-8 students led by a PM and tech lead{" "}
        </p>
        <p>
          <i>Build: </i> Develop the product throughout the semester (~12 weeks){" "}
        </p>
        <p>
          <i>Ship: </i> Deliver the final product to the nonprofit client!{" "}
        </p>
        <p>
          <i>Community: </i> Join an organization with a strong focus on
          mentorship and social community events{" "}
        </p>
      </>
    ),
  },
  {
    question:
      "Is extensive web development or data science experience required?",
    answer:
      "Nope! Mentorship is a core value of our organization so we are always looking to take less experienced developers as long as you are willing to put in the time and have the passion to learn. You will have a tight feedback loop with your project leads along with experienced members on your team to ensure your success and project’s success in-order to benefit the nonprofit your team is working with.",
  },
  {
    question: "Why don't you accept more students?",
    answer: (
      <>
        We would love to accept all of our good candidates, but from our
        perspective, this is what we see. <br />
        <br />
        <ul>
          <li>
            {" "}
            We can’t work with all the non-profits in the world, because the
            quality of work and projects is just not scalable. We need to be
            incredibly selective with our leads because any risk of wasting an
            entire six months of time would ultimately be counterproductive for
            both our clients and students.{" "}
          </li>
          <li>
            We can’t have enormous teams because productivity inherently goes
            down, and work becomes less meaningful if anyone is tasked with
            completing a miniscule part of the project. On top of that, there
            are physical limits on the number of groups we can meet in person.
          </li>
          <li>
            We can only interview a fixed number of candidates, no matter how
            many good ones apply. We can only take as many candidates as our
            projects leads can support along with the scope of the projects
            itself. We want to take everyone who is qualified and we want to
            take on more projects, but for the reasons above, we just can’t.
          </li>
        </ul>
        That being said, we are looking into ways we can accommodate for members
        in the future such as holding more external events and tech talks,
        expanding our interview process to interview more candidates, and
        increasing our training program for more Product Managers/Technical
        Leads to take on more projects but maintain the high quality work we are
        know for.
      </>
    ),
  },
  {
    question:
      "What are you looking for in Academy Members, Software Developers and/or Product Designers?",
    answer: (
      <>
        We go a lot more in-depth in our role descriptions in our{" "}
        <a href="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa">
          Official Notion page
        </a>
        . View{" "}
        <a href="https://www.notion.so/h4iuiuc/Academy-Member-H4I-2261147c161f4ab39167692b951e626c">
          Academy Member Role
        </a>
        . View{" "}
        <a href="https://www.notion.so/h4iuiuc/Software-Developer-H4I-11df54d29aba4399a940339e88b0e540">
          Software Developer Role
        </a>
        . View{" "}
        <a href="https://www.notion.so/h4iuiuc/Product-Designer-H4I-137480f11c884844878232c62d12db25">
          Product Designer Role
        </a>
        .
      </>
    ),
  },
  {
    question:
      "Do Software Developer/Academy Member applicants need to complete a take-home assignment?",
    answer:
      "Nope, only Product Designer applicants have a take-home to complete.",
  },
  {
    question:
      "How can I learn more?",
    answer: (
      <>
        Come to our Info Session on Wednesday, August 25 at 6:30 PM CDT!
        You can also meet us at Quad Day (Sunday, August 22 from 12-4 PM) and
        E-Night (Sunday, August 29 from 3-6 PM). All of these are opportunities to meet H4I members in-person and
        learn more about how you can get involved.
        Feel free to email us at <a href="mailto:uiuc@hack4impact.org">uiuc@hack4impact.org</a> with any questions or concerns you may have.
      </>
    )
  },
];

const applicationDetail = "";

const studentProcess = [
  {
    title: "Interest Form",
    detail: (
      <>
        <p>
          Sign up below and we'll add you to a mailing list for updates about
          Fall 2021 recruitment and educational content
          that the organization has to offer! This is non-binding and you can
          ask to be removed at any time.
        </p>
        {
          <ActionButton
            style={{ display: "block", marginTop: "10px" }}
            text="Sign Up"
            link={interestLink}
          />
        }
      </>
    ),
    icon: <Contract />,
  },
  // {
  //   title: "Want Updates?",
  //   detail: (
  //     <>
  //       <p>
  //         Keep in touch with us by following our social media. You can find
  //         recruitment updates on these platforms in addition to our website.
  //       </p>
  //       {
  //         <ActionButton
  //           style={{ display: "block", marginTop: "10px" }}
  //           text="Facebook"
  //           link={"https://www.facebook.com/h4iuiuc/"}
  //         />
  //       }
  //       {
  //         <ActionButton
  //           style={{ display: "block", marginTop: "10px" }}
  //           text="Instagram"
  //           link={"https://www.instagram.com/hack4impactuiuc/"}
  //         />
  //       }
  //     </>
  //   ),
  //   icon: <Interview />,
  // },
  {
    title: "Application Released",
    detail: (
      <>
        <p>Applications are open! Feel free to reach out to us with any questions you may have.</p>
        <ActionButton
          style={{ display: "block", marginTop: "10px" }}
          text="Apply!"
          link={applicationLink}
        />
      </>
    ),
    icon: <Contract />,
    // date: `${applicationReleaseDate}`,
    date: `${applicationReleaseDate} ${applicationReleaseTime}`,
  },
  {
    title: (
      <>
        {/* <a href="https://www.facebook.com/events/783414215343789">
          Info Session
        </a> */}
        Info Night
      </>
    ),
    detail: (
      <>
        <p>
          Be sure to come out to our Info Night to get an idea of who we are,
          what we do, the impact Hack4Impact has, and how you can get involved!
          Info Night will take place virtually as a YouTube livestream. You can click
          the button below to join at 6:30 PM CDT on Wednesday, August 25th.
        </p>
        <p>
          <b className="pt-2"></b>
        </p>
        <ActionButton
          style={{ display: "block", marginTop: "10px" }}
          text="Join"
          link={infoNightLink}
        />
      </>
    ),
    icon: <Education />,
    date: infoSessionDate,
  },
  {
    title: "Application Due",
    detail: (
      <>
        <p>Applications will be due on Sunday, August 29 at 11:59 PM Central Time! </p>
        {/*<a href={applicationLink} target="_blank" rel="noopener noreferrer">
          Link to application
    </a>*/}
      </>
    ),
    icon: <Contract />,
    date: `${applicationDueDate} ${applicationDueTime}`,
  },
  // {
  //   title: "External Director Applications",
  //   detail: (
  //     <>
  //       <p>Fill out our online application</p>
  //       before {applicationDueTime} on <b>Sunday, May 16</b>. External Director
  //       applications will be followed by an interview as well as a take-home
  //       challenge.
  //       {
  //         <ActionButton
  //           style={{ display: "block", marginTop: "10px" }}
  //           text="Apply Now"
  //           link={externalApplicationLink}
  //         />
  //       }
  //     </>
  //   ),
  //   icon: <Contract />,
  //   date: `${applicationDueDate}`,
  //   // date: `${applicationDueDate} ${applicationDueTime}` // due time hidden
  // },
  // {
  //   title: "Tech Director Applications",
  //   detail: (
  //     <>
  //       <p>Fill out our online application</p>
  //       before {applicationDueTime} on <b>Sunday, May 16</b>. Tech Director
  //       applications will be followed by an interview.
  //       {
  //         <ActionButton
  //           style={{ display: "block", marginTop: "10px" }}
  //           text="Apply Now"
  //           link={techApplicationLink}
  //         />
  //       }
  //     </>
  //   ),
  //   icon: <Contract />,
  //   date: `${applicationDueDate}`,
  //   // date: `${applicationDueDate} ${applicationDueTime}` // due time hidden
  // },
  // {
  //   title: "Interviews", //section for for designer recruitment only
  //   detail:
  //     "Hack4Impact looks for students who are hungry to learn, excellent teammates, and passionate about creating a social impact. Our interview will give you an opportunity to answer questions about yourself and role-specific tasks.",
  //   icon: <Interview />,
  //   date: firstRoundInterviewDate,
  // },
  {
    title: "First Round Interviews",
    detail:
      "Hack4Impact looks for students who are hungry to learn, excellent teammates, and are passionate for tech and social impact. Our first round interviews will give you an opportunity to answer some questions about yourself while also meeting some of our members.",
    icon: <Interview />,
    date: firstRoundInterviewDate,
  },
  // {
  //   title: "Second Round Interviews",
  //   detail:
  //     "This will be a short role-specific interview that is relevant to the position you are applying for. We encourage discussion throughout the interview and you’ll have an opportunity to ask questions to learn more about us.",
  //   icon: <Contract />,
  //   date: secondRoundInterviewDate,
  // },
  {
    title: "Social Round",
    detail:
      "Our Social Night will be a fun opportunity for us to get to know each other with a more casual atmosphere. Be your authentic self!",
    icon: <Interview />,
    date: socialRoundDate,
  },
  {
    title: "Software Dev/Academy Final Round Interviews",
    detail:
      "For Software Developer/Academy Member applicants, this will be a short technical interview that is relevant to the position you are applying for. We encourage discussion throughout the interview and you’ll have an opportunity to ask questions to learn more about us.",
    icon: <Interview />,
    date: secondRoundInterviewDate,
  },
  {
    title: "Product Designer Final Round Interviews",
    detail:
      "After the first round interviews, Product Designer applicants will be given a short take-home UI/UX design assignment that they will prepare over the course of a week and then present at their final round interviews.",
    icon: <Interview />,
    date: productDesignInterviewDate,
  },
  // {
  //   title: "Take-Home Exercise", // sp21 designer recruitment only
  //   detail:
  //     "If extended an interview, you will be responsible for a take-home assignment. This will be an opportunity for you to showcase your skill and understanding in design.",
  //   icon: <Contract />,
  //   date: takeHomeExerciseDate,
  // },
  // {
  //   title: "Take Home Exercise",
  //   detail:
  //     "A small, take home project designed to expose you to the tasks and technologies you will encounter while working with your project teams. More instructions will be provided then.",
  //   icon: <Contract />,
  //   date: takeHomeExerciseDate,
  // },
  // // {
  // //   title: "Interviews",
  // //   detail:
  // //     "Hack4Impact looks for students who are hungry to learn, excellent teammates, and are passionate for tech and social impact. Our interviews will be 1 hour long and you will get meet a couple of our members.",
  // //   icon: <Interview />,
  // //   date: firstRoundInterviewDate
  // // }
];

const closedText = (
  <p>
    Our Academy Member, Software Developer, and Product Designer applications for {currentSemester}{" "}
    will be open shortly! We will only be recruiting for these roles at this time. More
    information on roles and recruitment can be found on our{" "}
    <a href="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa">
      official Notion page
    </a>
    . If you would like application reminders or want to stay updated with our recruitment timeline, feel free to fill out our{" "}
    <a href={interestLink}>Interest Form</a>!
  </p>
  // <p>
  //   Our application period for {currentSemester}{" "}  is now open!
  //   We will only be recruiting for <b> Product Designers </b> for this semester.
  //   More information
  //   on roles and recruitment can be found on our
  //   {" "}<a href="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa">
  //   official Notion page</a>.
  //   If you are interested in our other positions, feel free to fill out the
  //   Interest form below!
  //   <p></p>
  // </p>
  // <p>
  //   Our recruitment process has historically consisted of an Info Session and
  //   applications due in the first week of the semester and a behavioral
  //   interview, role-specific interview, and social round in the weeks to follow.
  //   Certain roles will also require a take home exercise to be completed. More
  //   information on roles and recruitment can be found on our{" "}
  //   <a href="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa">
  //     official Notion page
  //   </a>
  //   .<p></p>
  //   Our application period for {currentSemester} <b> is now closed. </b>
  // </p>
);
export default {
  title: "Students",
  subHeadline,
  applicationLink,
  quote,
  faq,
  studentProcess,
  closedText,
  applicationDetail,
};
