import React from 'react';
import { withRouter } from 'react-router-dom';

class EmailRead extends React.Component {
    render() {
        const emailId = this.props.match.params.id;
        const email = this.props.emails.filter(email => { 
            if ( email.id === emailId ) {
                return email;                
            }
        })[0];

        return <div>
            <h1>{email.subject}</h1>
            <h3>{email.date} {' '} {email.email}</h3>
            <p>{email.body}</p>
        </div>
    }
}


export default withRouter(EmailRead);