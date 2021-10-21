import React, { Component } from 'react';
import overallStyles from "../overall.module.scss";
import Collapsible from '../../utils/Collapsible';

class WikiDesign extends Component {
    render() {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.text_heading}>
                        Wiki Design
                    </div>
                    <div className={overallStyles.description}>
                        To read about the design of our wiki and how our design increases accessibility for all users and for ADHD, please refer to our wiki design handbook&nbsp; 
                        <a href="https://2021.igem.org/wiki/images/6/68/T--Waterloo--InclusivityDesignHandbook.pdf" download>
                            here
                        </a>
                        . The description below outlines the key features that were considered. Please note that the features are fully designed but not fully implemented. Development will be completed in future iterations.
                    </div>
                    <Collapsible open title="Accessibility Toolbar">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                Although it is very difficult to make our iGEM wikis and projects perfectly accessible to everyone due to certain limitations, there are many ways we can make it more accessible, and more inclusive. In this year's wiki, we have developed and completed our accessibility toolbar with an additional feature - the day and night mode. The accessibility toolbar can be enabled by mouse clicks or keyboard shortcuts which are visibly displayed under each label. 
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="The Benefits of Dark Mode">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                We introduce the switch mode options, a simple toggle that lets users change the theme of the website into a darker colour. Exposure to light for a long period of time can suppress the secretion of melatonin, especially with blue light which is more strong at night, can do so even more effectively (Harvard Health Publishing, 2020). Moreover, the symptoms of digital eye strain can be caused through bright screens (Fottrell, 2018). Therefore, we want to implement the option of dark mode to help protect our users’ vision when browsing our wiki.
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                Our previous year version of the Accessibility Toolbar features:
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Read-aloud screen-reader (play, pause, restart)
                                </li>
                                <li>
                                    Adjustable font size controller
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                Our new version of the Accessibility Toolbar features:
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Adjustable font size controller
                                </li>
                                <li>
                                    Change Mode (day/night)
                                </li>
                                <li>
                                    Read-aloud screen-reader (play, pause, restart)
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                In future interactions of the Accessibility Toolbar, we want to include:
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Word-highlighter (as screen-reader plays)
                                </li>
                                <li>
                                    Active voice search and search bar by keywords
                                </li>
                                <li>
                                    Customizable colour palettes( for various types of colour-blindness)
                                </li>
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Navigability">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                Easy navigation around a website is of the most important when it comes to designing a website. The cornerstone of web usability is navigation, and users can better navigate the website and discover information more quickly if it is well-designed. 
                            </div>
                            <div className={overallStyles.description}>
                                We added the "up to the top" arrow options so that when the information gets too lengthy, users have the option to scroll up to the top of the page faster instead of manually scrolling up. 
                            </div>
                            <div className={overallStyles.description}>
                                To improve the website's functionality, we added the index section for users to quickly find information. 
                            </div>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Chatbot">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description}>
                                We want to introduce the chat bot feature of wiki, which conducts conversations without human intervention. The chatbot allows users to access all the necessary knowledge with keywords attached, leading to the information. We believe that the chatbot would offer convenience to the users with fast and efficient communication as to where things are and address their concerns on existing problems. 
                            </div>
                            <div className={overallStyles.subheading}>
                                How can we make our chatbot user-friendly?
                            </div>
                            <div className={overallStyles.subheading}>
                                Chatbot Function
                            </div>
                            <div className={overallStyles.description} style={{marginBottom: "-2%"}}>
                                For our future wiki, we want to focus on the two main functions for our chatbot, which include:
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Searching for information: when users input a keyword, the chatbot will automatically return them a list of pages containing the keywords and allow them to click on the page from the conversation. 
                                </li>
                                <li>
                                    Contacting the team: the users can also send us messages/emails through the chatbot when they have any concerns or questions for our team.
                                </li>
                            </ul>
                            <div className={overallStyles.subheading}>
                                Chatbot Personality
                            </div>
                            <div className={overallStyles.description}>
                                Incorporating the human-like characteristics of the bot through programming. The chatbot's personality is built on its ability to keep a consistent tone of voice throughout the conversation. This entails carefully selecting the phrases used in a chatbot. It involves directing how our chatbot maintains interactions and responds to irrelevant or perplexing questions. The Chatbot personality helps define the user experience and is key to the way users interact and learn about our information. 
                            </div>
                            <div className={overallStyles.subheading}>
                                Chatbot Future Development
                            </div>
                            <div className={overallStyles.description}>
                                Besides finishing the development of the chatbot, we want the future wiki to expand more on the functionality and characteristics of the chatbot. We want to highlight the efficiency of the chatbot as its transcript and analytics can be used to measure and improve interactions with website visitors and customers. 
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        )
    }
}

export default WikiDesign;