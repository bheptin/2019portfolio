import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../css/work.css';
import diceGame from '../images/Dice-Game.png';
import giphy from '../images/Giphy.png';
import tetris from '../images/Tetris.png';
import tryAngle from '../images/tryAngle.png';

class Work extends Component {
    render () {
        return(
            <div className="Work">
                <h2>Work</h2>
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                        <Tab>Title 4</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                        <img className="dice-game" src={diceGame} alt="dice game screenshot" />
                        <p>ofnposvpeounrpvenpronvorpnvorvnpeonvpoenvpeonvpoenvpoenvoprvenpornceoprv
                            reovenroivenrinveorinveovnoinovneoirowiecowivnowevnwr
                            vojrnovnwowinrovivnorinovirnvoinoinoinoniuniunononoinounounouiuboun
                            ibiuiuhiuiuiiuiniuiubiybutyrtrdtytuyggvytvuyvuyvvuytfuycutrcuytuy
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <img className="giphyPic" src={giphy} alt="dice game screenshot" />
                        <p>ofnposvpeounrpvenpronvorpnvorvnpeonvpoenvpeonvpoenvpoenvoprvenpornceoprv
                            reovenroivenrinveorinveovnoinovneoirowiecowivnowevnwr
                            vojrnovnwowinrovivnorinovirnvoinoinoinoniuniunononoinounounouiuboun
                            ibiuiuhiuiuiiuiniuiubiybutyrtrdtytuyggvytvuyvuyvvuytfuycutrcuytuy
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                        <img className="tetrisPic" src={tetris} alt="dice game screenshot" />
                        <p>ofnposvpeounrpvenpronvorpnvorvnpeonvpoenvpeonvpoenvpoenvoprvenpornceoprv
                            reovenroivenrinveorinveovnoinovneoirowiecowiv
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                        <img className="tryAnglePic" src={tryAngle} alt="dice game screenshot" />
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