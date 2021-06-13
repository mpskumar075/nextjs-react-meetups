//our-domain.com/new-meetup
import { Fragment } from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
const router = useRouter();

async function addMeetupHandler(enterMeetupData) {
    const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enterMeetupData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
}

    return <Fragment>

<Head>
<title>Add Meetups</title>
<meta name="descripton" content="Add your react meetups" />
</Head>

    <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
}

export default NewMeetupPage;