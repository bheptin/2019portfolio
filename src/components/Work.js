import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../css/work.css';
import contentAppsMain from '../images/ContentAppsMain.png';
import selenium from '../images/Selenium.png';
import giphy from '../images/Giphy.png';
import netcashLogin from '../images/NetCashLogin.png';
import tryAngle from '../images/tryAngle.png';
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
                        <Tab>Title 3</Tab>
                        <Tab>Title 4</Tab>
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
                        <p>ofnposvpeounrpvenpronvorpnvorvnpeonvpoenvpeonvpoenvpoenvoprvenpornceoprv
                            reovenroivenrinveorinveovnoinovneoirowiecowivnowevnwr
                            vojrnovnwowinrovivnorinovirnvoinoinoinoniuniunononoinounounouiuboun
                            ibiuiuhiuiuiiuiniuiubiybutyrtrdtytuyggvytvuyvuyvvuytfuycutrcuytuy
                        </p>
                        <img className="SeleniumPic" src={selenium} alt="Selenium screenshot" />

                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                        <img className="tetrisPic" src={contentAppsMain} alt="dice game screenshot" />
                        <p>ofnposvpeounrpvenpronvorpnvorvnpeonvpoenvpeonvpoenvpoenvoprvenpornceoprv
                            reovenroivenrinveorinveovnoinovneoirowiecowiv
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                        <img className="tryAnglePic" src={contentAppsMain} alt="dice game screenshot" />
                        <p>ofnposvpeounrpvenpronvorpnvorvnpeonvpoenvpeonvpoenvpoenvoprvenpornceoprv
                            reovenroivenrinveorinveovnoinovneoirowiecowivnowevnwr
                            vojrnovnwowinrovivnorinovirnvoinoinoinoniuniunononoinounounouiuboun
                            ibiuiuhiuiuiiuiniuiubiybutyrtrdtytuyggvytvuyvuyvvuytfuycutrcuytuy
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Work;