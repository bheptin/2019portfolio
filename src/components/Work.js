import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../css/work.css';
import contentAppsMain from '../images/ContentAppsMain.png';
import selenium from '../images/Selenium.png';
import giphy from '../images/Giphy.png';
import netcashLogin from '../images/NetCashLogin.png';
import tryAngle from '../images/tryAngle.png';
import tryAngleRestaurant from '../images/TryAngleRestaurant.png';
import jenkins from '../images/Jenkins.png';
import protractor from '../images/ProtractorSample.png';

class Work extends Component {
    render () {
        return(
            <div className="Work">
                <h2>Work</h2>
                <Tabs>
                    <TabList>
                        <Tab>HealthGrades/Influence Health</Tab>
                        <Tab>BBVA Compass</Tab>
                        <Tab>Iron Yard Group Project</Tab>
                        <Tab>Giphy Project</Tab>
                    </TabList>

                    <TabPanel>
                        <img className="ContentAppsPic" src={contentAppsMain} alt="Content Apps screenshot" />
                        <p>
                            Currently, I'm working as a developer, working in our Content Apps that we have created on top of the Crown Peak CMS experience.
                            We use the .NET framework and use C#, Angular, and Javascript. SQL as our backend. I mostly work with minor bug fixes and occaisionally will get the 
                            chance to help with bigger projects. 
                        </p>
                        <img className="ProtractorSamplePic" src={protractor} alt="Protractor screenshot" />
                        <p>
                            When I'm not working on Jira tickets, I'm focused on maintaining our Automated testing suite. We primarily use Protractor, but I
                            occaisionally will use other tools such as: Artillery for load testing, Postman for API calls, and Jenkins. We use Jenkins as our build
                            tool for all of our projects and I created the testing builds that work off of the master builds. Currently, I have 180+ tests running against
                            our three major content types, as well as a screenshot test that runs periodically throughout the month. When we deploy, those screenshots
                            help us to check for discrepencies in our client's front facing sites. 
                        </p>
                        <img className="JenkinsSamplePic" src={jenkins} alt="Jenkins screenshot" />
                    </TabPanel>
                    <TabPanel>
                        <img className="NetCashLoginPic" src={netcashLogin} alt="NetCash Login screenshot" />
                        <p>
                            My primary duties were to setup, create, and maintain automated testing for the NetCash project. The majority of tests were created
                           in Spring Tool Suite with Selenium and Maven, using the Cucumber style of user stories. the Java language was used to tie Cucumber
                           to Selenium and I was able to gain a base understanding of that syntax. We used BitBucket as our repository and a pipeline with Bamboo 
                           that fired off our tests every 30 minutes initially. 
                        </p>
                        <p>
                            Before leaving the company, I managed to document roughly 90% of all testing that was taking place for my group. In addition to 
                            this testing, I was being used as a "fill-in" for our business analyst, who left right after I was hired. This gave me valuable
                            insight into the daily workings of the projects I was handling. Being this was my first tech position, I learned far more than
                            just coding. 
                        </p>
                        <img className="SeleniumPic" src={selenium} alt="Selenium screenshot" />

                    </TabPanel>
                    <TabPanel>
                        <img className="TryAngleRestaurantPic" src={tryAngleRestaurant} alt="TryAngle screenshot" />
                        <p>This class project was the result of an Idea I had to solve a major problem in my life...where to eat!!
                           Once a user is logged in, they can invite friends, then pick several restaurants in their local area. Once
                           their friends make their choices a choice would be made. If the users picked a common restaurant, then that would be chosen.
                           If they hadn't chosen one, then a choice would be made for them from the choices they made.
                        </p>
                        <img className="TryAnglePic" src={tryAngle} alt="TryAngle screenshot" />
                        <p>
                           We built this application using Reactjs, with Firebase as our database. The restaurant API was from Yelp and helped us to use Google
                           Maps to show the location of the restaurant. If no choice was made, we used Lodash to randomize the choices and select one for the group.
                           We ran into multiple issues using Yelp's zip codes, so we added two npm packages (zippity-do-dah and Gps2zip) that ended up working well. The
                           biggest issue we ran into was the one way data binding and, once finished, realized we'd have been better building this application using 
                           Redux to pass all the information we had running from parent to children.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <img className="GiphyPic" src={giphy} alt="Giphy screenshot" />
                        <p>
                            One of the earliest projects from school where I was able to tie in an API call and use that information. We took the 
                            standard Giphy search and made it where you could save the ones you liked from that search. Unfortunately, the only way we 
                            were able to save it was in the local storage, so you lost your favorites after leaving this screen. But the bigger picture was 
                            that finally, I had made a responsive site with the ability to communicate with a server and render new things on the page. Nice for
                            my first try!!
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Work;