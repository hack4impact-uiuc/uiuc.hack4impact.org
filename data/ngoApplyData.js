import React from "react"; // to import svgs
import Phone from "../static/icons/phone-call.svg";
import Contract from "../static/icons/contract.svg";
import ActionButton from "../components/actionButton";
import Link from "next/link";

// constants that will affect links in the nonprofit application page (not using either forms as of Fa20)
const applicationLink = "https://forms.gle/jaEsJHkBtzn9M5jt7";
const interestFormLink =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeart7T-6sR61MXhdOfsN0n7oJ8ZThYeNjdqPnsLQLzLNKL2A/viewform";
const projectAppExample =
  "https://docs.google.com/document/d/1SGG7gxu8lgWMOhxIULMSUZQa-4p0bLwrwDl4SAZW2lE/edit";
const pitchbookLink = "https://h4i-pitchbook.now.sh/";
const projectsLink = "https://uiuc.hack4impact.org/projects";

// constants for dates
const applicationDueDate = "September 1, 2019";
const currentSemester = "Fall 2020";
const nextSemester = "Spring 2021";

/*
what's exported
*/

export default {
  subHeadline:
    "As a nonprofit, you deliver tremendous social value to the community every day. What if you could leverage technology to make your work even more efficient, effective, or far-reaching?",
  title: "Non-Profit Organizations",
  applicationLink: applicationLink,
  interestFormLink: interestFormLink,
  pitchbookLink: pitchbookLink,
  projectsLink: projectsLink,
  ngoProcess: [
    // {
    //   title: "Nonprofit Interest Form",
    //   detail: (
    //     <>
    //       This is a short form to get to know your organization better and your
    //       potential project ideas. It’ll help us get an initial sense of your
    //       organization’s goals, needs, and expectations. <br />
    //       <br />
    //       This <a href={interestFormLink}> form </a>
    //       is open throughout the year and shoot us an
    //       <a href="mailto:uiuc@hack4impact.org"> email</a> after you've
    //       submitted it!
    //       <ActionButton
    //         style={{ display: "block", marginTop: "10px" }}
    //         text="Fill Out"
    //         link={interestFormLink}
    //       />
    //     </>
    //   ),
    //   icon: <Contract />
    // },
    {
      title: "Initial Contact",
      detail: (
        <>
          Reach out to our team via{" "}
          <a href="mailto:uiuc@hack4impact.org">email</a> to get started with
          the application process. We'd love to hear more about your
          organization and potential project ideas as it will help us get an
          initial sense of your organization's goals, needs, and expectations
          while you progress through the application process.
        </>
      ),
      icon: <Contract />,
    },
    {
      title: "Context",
      detail:
        "We will reach out shortly to schedule a call to dive deeper into your organization and project ideas, while also explaining more about what we do and our goals. Then, we will also work with you to define and clarify your project ideas.",
      icon: <Phone />,
    },
    {
      title: "Scoping",
      detail:
        "We may schedule additional calls to further tighten your project specifications. With these additional meetings, we aim to dive deep into your specific ideas to gain a better understanding of the reasoning, value, and impact of these potential projects, outline specifications for these ideas, and narrow them down to a few that we believe we can reasonably accomplish with our development timeline and that align with your organization and our goals.",
      icon: <Phone />,
    },
    {
      title: "Ideation",
      detail:
        "We aim to create the most impactful product for your organization and ours. Our team will continue to work with your organization to gather additional insight through discovering pain points, conducting user research, and incorporating other feedback from your organization. This way, our development teams can jump right in after ideation and build the best product that serves your needs!",
      icon: <Contract />,
    },
    {
      title: "Confirmation",
      detail: (
        <>
          We will review the details for the finalized project and confirm that
          our goals and expectations are aligned. If everything checks out, our
          our project leads will contact you to begin the development process!
        </>
      ),
      icon: <Contract />,
      //date: applicationDueDate
    },
  ],
  quote: {
    text:
      "We absolutely recommend working with Hack4Impact. We needed to address English competency in Cambodia, and Hack4Impact was the actual organization who helped us get it done. Hack4Impact gives nonprofit organizations an opportunity to collaborate and support their mission in ways they even may not have considered.",
    source: "Kelly Wolfe",
    sourceTitle:
      "Love Without Boundaries Managing Director of Strategic Partnerships",
  },
  faq: [
    {
      question: "What is the development process like?",
      answer: (
        <>
          Each project has a Product Manager, who will be responsible for
          communicating with the client, leading the team, and delivering a
          successful product as well as a team of software engineers to build
          the technology. They will be leading a team of 5-8 developers with a
          possibility of a designer as well. They will start off diving even
          deeper into your idea and problems and come up with a Product
          Requirements Doc (PRD) specifying your requirements and timeline.
          Development will start shortly afterwards and they will maintain
          contact with you throughout the entire process to gather feedback.
          Notable dates will the Minimum Viable Product (MVP) demo, which will
          happen around the middle of the semester and the handoff, which will
          be around the end of the semester. For more information, look{" "}
          <a href="https://h4i-project-timeline-qonwikgcqk.now.sh">here.</a>
          <br />
          <br />
          Traditionally, projects and development will span one semester, after
          which our team will transfer ownership of the repository and any
          additional resources created during the development process. More
          recently, however, some projects have spanned the course of an entire
          year in an effort to ensure quality and impact. The development
          process follows the exact same structure in these cases, where a fully
          fully functional prototype is completed after one semester. However,
          these projects continue by gathering feedback during the next semester
          and iterating on the prototype to ensure that we're creating the most
          impactful and useful product for our clients. The length of the
          project is discussed and agreed upon from both parties before official
          development.
        </>
      ),
    },
    {
      question: "How often do teams meet with their clients?",
      answer:
        "Meeting frequency is very dependent on the team and client. Generally, teams hold weekly or biweekly meetings with their clients. Other checkpoints include initial calls to scope out and define the project with our project leads, an MVP demo, and a Final Handoff presentation.",
    },
    {
      question: "Is there a development fee?",
      answer:
        "We typically charge a fee of $1,000 per semester to our clients for any work that we do. As a student-led nonprofit building products for other nonprofits, we typically incur costs from using services like Amazon AWS or other third-party APIs as we build our products. We also aim to develop our members professionally and foster a collaborative, passionate, and dedicated community by offering tech talks, networking events, and organization-wide retreats. Thus, the development fee mainly goes towards technology costs, professional development, and community events. However, we understand that nonprofits may have different financial circumstances and are open to making accommodations on a case by case basis.",
    },
    {
      question: "How can I maximize my chances of working with Hack4Impact?",
      answer: (
        <>
          Tell us about your organization and the problems that you are facing.
          Let us know what your vision is and come in with some initial project
          project ideas. Don’t worry about the validity of those ideas - we use
          them as a starting point for deeper conversation regarding your
          organization during our initial call! While a detailed application
          would be helpful, we also have a very supportive team that will guide
          through our process and inform you of all the relevant information
          that we will need along the way.
        </>
      ),
    },
    {
      question: "What are some examples of projects?",
      answer: (
        <>
          Our <Link href="/projects">Past Projects</Link> are the best examples!
          Some other examples include:
          <ul>
            <li>
              A platform that displays your organization’s resources for the
              public on a map.{" "}
            </li>
            <li>
              A system to communicate with and collect data from users via text
              message surveys.
            </li>
            <li>A tool to automate a time-consuming manual process.</li>
            <li>
              An application that allows you to keep track of the organization's
              activities and see where cost cutting can occur.
            </li>
            <li>
              An application to keep track of the people you serve and better
              assess your overall impact.
            </li>
            <li>
              Or anything else that will empower you to broaden your impact!
            </li>
          </ul>
        </>
      ),
    },
  ],
  applicationDetail: (
    <>
      Our application process is designed to be as straightforward as possible.
      If you are interested in working with us, you can contact us at
      <a href="mailto:uiuc@hack4impact.org"> uiuc@hack4impact.org</a> with your
      organization and vision for the problems you are facing. We will carefully
      consider your submission and reach out to you if our goals goals align.
      Some aspects of potential projects that we pay close attention to include
      technical complexity, impact, and mission.
    </>
  ),
  closedApplicationText: (
    <b>
      Our current application period for {currentSemester} has closed! Feel free
      to reach out to us or fill in the
      <a href={interestFormLink}> non-profit interest form </a>
      and we’ll still love to talk to you and potentially work with your
      organization in {nextSemester}.
    </b>
  ),
};
