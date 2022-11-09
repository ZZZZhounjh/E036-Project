import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="notice">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Important Notice</h2>
                        <span>Watch out for fake govt websites and links by scammers taking advantage of COVID-19 situation 
                        <br></br>There’s been an increasing number of fraudulent websites and links in this time Phishing scam cases in Singapore have seen a significant increase this year,with more than 190 cases reported between January 2020 to August 2020. This is a far cry from the seven cases reported in the same period in 2019, with losses amounting to $304,000 this year as compared to losses amounting to $4,000 in the same period in 2019. </span>
                        
                        <h1> Phishing Scams come in the form of: </h1>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div >
                            <p3> Emails about tempting deals, <br></br>cash payout, lucky draws </p3>
                            </div>
                            <div >
                            <p3> Text messages on winning<br></br> the lottery, ongoing promotions  </p3>
                            </div>
                            <div>
                            <p3> Phone Call impersonations <br></br>from Banks, Govt Agencies</p3>
                            </div>
                            <div>
                            <p3> Fake Advertising campaign <br></br> on social media </p3>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
