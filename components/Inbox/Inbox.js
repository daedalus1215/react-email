import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import EmailRow from './EmailRow.js';

export default class Inbox extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        let emailId = e.currentTarget.id;
        this.props.handler(emailId);
    }

    render() {
        return <div id="inbox">
            <h1>Inbox</h1>
            <p>You have {this.props.emails.length} emails </p>
            <div id="all-emails">
                {this.props.emails.map((email, index) => {
                    return <Link to={`/read/${email.id}`} key={index}  id={email.id} onClick={this.handleClick}>
                        <EmailRow email={email} isRead={this.props.isRead} handler={this.props.handler}/>
                    </Link>
                })}
            </div>
        </div>
    }
}