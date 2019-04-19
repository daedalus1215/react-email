import React, {Component} from 'react';
import './emailRow.css';


export default class EmailRow extends Component {    

    getClassName() {
        let className = "email-row";
        let emailId = this.props.email.id;
        if (this.props.isRead[emailId]) {
            className += " email-is-read";
        }
        return className;
    }
    

    onClickHandler(e) {
        e.preventDefault();
        let emailId = this.props.email.id;
        this.props.handler(emailId)
    }

    render() {
        return <div className={this.getClassName()}>
            <div className="email-toggle-is-read">
                <input type="checkbox" onClick={this.onClickHandler}/>
            </div>
            <div className="email-date">{this.props.email.date}</div>
            <div className="email-from">{this.props.email.email}</div>
            <div className="email-subject">{this.props.email.subject}</div>
            <div className="email-body">{this.props.email.body}</div>
        </div>
    }
}