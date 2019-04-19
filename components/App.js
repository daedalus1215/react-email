import React, { Component } from 'react';
import Inbox from './Inbox/Inbox';
import { BrowserRouter, Route } from 'react-router-dom';
import EmailRead from './Inbox/EmailRead';
import './styles.css';

import EMAILS from '../MOCK_DATA.json'
import Nav from './Inbox/Nav/Nav';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: EMAILS,
            isRead: {
                "9e7723f3-1a7e-446b-8f65-e8e231a79fb2": true
            }
        }

        this.handleClickOnEmail = this.handleClickOnEmail.bind(this);
    }


    handleClickOnEmail(emailId) {
        let readEmails = this.state.isRead;        
        readEmails[emailId] = true;

        this.setState({
            isRead: readEmails
        });
    }

    render() {
        return (
            <div id="app-container">
                <BrowserRouter>
                    <Nav />
                    <Route exact path="/" component={() => (
                        <Inbox emails={this.state.emails}  isRead={this.state.isRead} handler={this.handleClickOnEmail}/>
                    )} />
                    <Route exact path="/read/:id" component={() => (
                        <EmailRead emails={this.state.emails} handler={this.handleClickOnEmail} />
                    )} />
                </BrowserRouter>
            </div>
        )
    }
}