import { Row, Card, Col, Container } from "reactstrap";
import Link from "next/link";

// need to add to this whenever a new library/technology is used
// this must match the strings listed in props.techStack, which is an array
const techStackMasterList = {
  react: {
    link: "https://reactjs.org/",
    title: "React",
    imgPath: "/images/techStack/react.jpg",
  },
  redux: {
    link: "https://redux.js.org/",
    title: "Redux",
    imgPath: "/images/techStack/redux.jpg",
  },
  flask: {
    link: "http://flask.pocoo.org/",
    title: "Flask",
    imgPath: "/images/techStack/flask.jpg",
  },
  mongodb: {
    link: "https://www.mongodb.com/",
    title: "MongoDB",
    imgPath: "/images/techStack/mongodb.jpg",
  },
  reactnative: {
    link: "https://facebook.github.io/react-native/",
    title: "React Native",
    imgPath: "/images/techStack/react.jpg",
  },
  postgres: {
    link: "https://www.postgresql.org/",
    title: "Postgres",
    imgPath: "/images/techStack/postgres.jpg",
  },
  relay: {
    link: "https://facebook.github.io/relay/",
    title: "Relay",
    imgPath: "/images/techStack/relay.jpg",
  },
  nodejs: {
    link: "https://nodejs.org/en/",
    title: "Node.js",
    imgPath: "/images/techStack/nodejs.jpg",
  },
  graphql: {
    link: "https://graphql.org/",
    title: "GraphQL",
    imgPath: "/images/techStack/graphql.jpg",
  },
  redis: {
    link: "https://redis.io/",
    title: "Redis",
    imgPath: "/images/techStack/redis.jpg",
  },
  python: {
    link: "https://www.python.org/",
    title: "Python",
    imgPath: "/images/techStack/python.jpg",
  },
  sklearn: {
    link: "https://scikit-learn.org/stable/",
    title: "Scikit-Learn",
    imgPath: "/images/techStack/sklearn.png",
  },
  gensim: {
    link: "https://radimrehurek.com/gensim/",
    title: "Gensim",
    imgPath: "/images/techStack/gensim.png",
  },
  nltk: {
    link: "https://www.nltk.org",
    title: "NLTK",
    imgPath: "/images/techStack/python.jpg",
  },
  beautifulsoup: {
    link: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
    title: "Beautiful Soup",
    imgPath: "/images/techStack/beautiful soup.jpg",
  },
  dynamodb: {
    link: "https://aws.amazon.com/dynamodb/",
    title: "DynamoDB",
    imgPath: "/images/techStack/dynamodb.png",
  },
  aws: {
    link: "https://aws.amazon.com",
    title: "AWS",
    imgPath: "/images/techStack/aws.png",
  },
  spacy: {
    link: "https://spacy.io",
    title: "Spacy",
    imgPath: "/images/techStack/spacy.jpg",
  },
  box: {
    link: "https://box.com",
    title: "Box",
    imgPath: "/images/techStack/box.jpg",
  },
  yargs: {
    link: "http://yargs.js.org",
    title: "Yargs",
    imgPath: "/images/techStack/yargs.png",
  },
  next: {
    link: "https://nextjs.org",
    title: "NextJS",
    imgPath: "/images/techStack/next.png",
  },
  express: {
    link: "https://expressjs.com",
    title: "ExpressJS",
    imgPath: "/images/techStack/express.png",
  },
  mapbox: {
    link: "https://www.mapbox.com",
    title: "Mapbox",
    imgPath: "/images/techStack/mapbox.png",
  },
};

const ProjectTechStack = ({ techStack }) =>
  techStack === undefined || techStack === null ? (
    <></>
  ) : (
    <>
      <div className="tech-stack margin-sm-all">
        <Row>
          <div className="col-md-12">
            <div className="text-center">
              <h5 className="project-detail-title"> Tech Stack </h5>
            </div>
          </div>
        </Row>
        <div className="center" style={{ margin: "auto" }}>
          {techStack.map((tech) => (
            <Col md="2" xs="6">
              <Card className="border-0">
                <Link href={techStackMasterList[tech].link}>
                  <a>
                    <img
                      src={techStackMasterList[tech].imgPath}
                      className="img-thumbnail img-fluid tech-stack-img"
                    />
                  </a>
                </Link>
                <Link href={techStackMasterList[tech].link}>
                  <a className="text-center tech-stack-link">
                    {techStackMasterList[tech].title}
                  </a>
                </Link>
              </Card>
            </Col>
          ))}
        </div>
      </div>
      <style jsx>{`
        .tech-stack {
          margin-top: 20px;
        }
        .tech-stack div {
          padding: 5px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .tech-stack-link {
          color: #155da1;
        }
        .tech-stack-img:hover {
          box-shadow: 0 5px 30px rgba(44, 62, 80, 0.1);
        }
      `}</style>
    </>
  );

export default ProjectTechStack;
