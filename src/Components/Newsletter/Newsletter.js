import React from 'react'
import Mailchimp from 'react-mailchimp-form'

export default function Newsletter() {
    return (
        <div>
             <Mailchimp
        action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
            
        </div>
    )
}
