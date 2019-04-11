import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import EmailRow from './EmailRow.js';
import EmailRead from './EmailRead.js';

export default class Inbox extends Component {
    render() {
        return <div id="inbox">
            <h1>Inbox</h1>
            <p>You have {this.props.emails.length} emails </p>
            <div id="all-emails">
                {this.props.emails.map((email, index) => {
                    return <Link to={`/read/${email.id}`} key={index}>
                        <EmailRow email={email}/>
                    </Link>
                })}
            </div>
        </div>
    }
}