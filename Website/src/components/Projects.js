import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/scam1.png";
import projImg2 from "../assets/img/scam2.png";
import projImg3 from "../assets/img/scam3.png";
import projImg4 from "../assets/img/scam4.png";
import projImg5 from "../assets/img/scam5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    
    {
      title: "Verify links belong to government agencies before accessing them",
      
      imgUrl: projImg1,
    },

    {
      title: "Trust only official website links via .gov.sg websites",
      
      imgUrl:projImg2
    },
    {
      title: "Look out for the lock icon or https:// as an added precaution before sharing sensitive information",
      
      imgUrl:projImg3
    },
    {
      title: "Never disclose your Singpass ID, password and One-Time Password (OTP)",
      
      imgUrl:projImg4
    },
    {
     
    },
    {
      title: "Check for substitution of letters in URL (e.g. “-” to replace “.”)",
      
      imgUrl:projImg5
    },
   
  ];

  return (
    <section className="project" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1>Education</h1>
                <p> To educate users on cyber-threats</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Security Advisory</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Phishing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cyber Tips</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2>How to protect yourself against phishing scams</h2>
                    <p>Here are some ways for you to protect against yourself from phishing scams</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p4>Phishing is a social engineering technique used by cyber criminals to fraudulently obtain sensitive information by impersonating a legitimate individual or reputable organisation in digital communication. Phishing can come in the form of emails, messages and websites.</p4>
                      <div>
<br></br>                      <p6>What are phishing emails after? 

<br></br>The intent behind a phishing email varies and could include:

<br></br>- To trick the recipient into disclosing sensitive information, such as login ID, passwords, credit card information or personally identifiable information
<br></br>- To trick the recipient into transferring funds
<br></br>- To download malicious software on a recipient’s computer
<br></br>- To test the existence of active mailboxes</p6>
                    </div>
                    <div>
<br></br>                    <p5>Avoid falling prey to phishing emails by doing the following:

<br></br>- Look out for spelling errors and bad grammar 
<br></br>- Be wary of urgent or threatening messages 
<br></br>- Always check to ensure that the sender email address corresponds with the sender name by checking for typos and/or unusual email addresses
<br></br>- Hover your mouse over the link(s) in the email to check the full website address before clicking on the link(s)
<br></br>- Scan attachments before opening or downloading them</p5>
                    </div>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Cyber Tip - Use Strong Passwords And Enable 2FA</h2>
                      <p>Strong passwords are important for keeping your online accounts and personal information safe from cyber criminals, and enabling Two-Factor Authentication provides an additional layer of security.</p>
                      <h3>How to Create a Strong Password</h3>
                      <div>
                      <h5>Step 1: Use five different words that relate to a memory that is unique to you. <br></br>e.g. Learntorideabikeatfive</h5>
                      </div>
                      <p>When it comes to creating a password, the longer it is, the harder it is to guess. Be sure not to use personal information such as your name, NRIC or birthdate, or other information that can be obtained easily, for instance by doing a search online.</p>
                      <h5>Step 2: Use uppercase and lowercase letters, numbers or symbols to make it even harder to crack. e.g. LearnttoRIDEabikeat5</h5>
                      <p>Remember to keep it random by ensuring that your password does not have a pattern and is unpredictable. This means that it should be difficult for others to guess, even with special tools. Some examples of obvious patterns include:</p>
                      <p>- Using commonly used phrases e.g. maytheforcebewithyou
<br></br>- Capitalising the first letter of the password e.g. Livelongandprosper
<br></br>- Adding a number at the end e.g. qwerty1
<br></br>- Replacing a letter with a number or symbol e.g. p@ssw0rd
<br></br>- Now that you have successfully created a strong password, you should enable 2FA, which stands for Two-Factor Authentication, to add an extra layer of security to your account.</p>
                      <h5>Enable Two-Factor Authentication (2FA) when available</h5>
                      <p>2FA uses more than one type of information to identify who you are in order to grant you access to your online account. The first factor in 2FA is usually something that you know, such as a password, while the second factor is usually something you have, such as a one-time password (OTP) from a physical OTP token. Another form of authentication involves biometrics, which includes fingerprints and face recognition. The second layer of security ensures that even if a hacker obtains your password, your account is still protected if he is unable to get hold of the second factor of authentication.</p>
                      <p>2FA is readily available for many of your online accounts, including your email and social media accounts</p>
                      <h5>Maintain Good Password Hygiene:</h5>
                      <p>Aside from creating a strong password and enabling 2FA, it is important that you take steps to protect your password:</p>
                      <p><br></br>- Use different passwords for your online accounts
                      <br></br>- Don’t share your passwords with anyone or write them down
                      <br></br>- Don’t log in to online services over unsecured Wi-Fi networks
                      <br></br>- Don’t provide your passwords or OTP in response to a phone call, email or suspicious website as it could be a phishing scam.</p>
                      <p>If you believe that your password has been compromised, change it immediately and check for signs of unauthorised activity. Don’t wait until it is too late. Start using strong passwords and enabling 2FA for your online accounts today.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
