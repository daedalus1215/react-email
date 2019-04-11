import React, { Component } from 'react';
import Inbox from './Inbox/Inbox';
import { BrowserRouter, Route } from 'react-router-dom';
import EmailRead from './Inbox/EmailRead';
import './styles.css';

import EMAILS from '../MOCK_DATA.json'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: EMAILS
        }
    }

    render() {
        return (
            <div id="app-container">
                <BrowserRouter>
                    <Route exact path="/" component={() => (
                        <Inbox emails={this.state.emails} />
                    )} />
                    <Route exact path="/read/:id" component={() => (
                        <EmailRead emails={this.state.emails} />
                    )} />
                </BrowserRouter>
            </div>
        )
    }
}