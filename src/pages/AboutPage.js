import React from 'react';
import Jumbo from '../components/Jumbo';

function AboutPage(props) {
    return (
        <div>
            <Jumbo title={props.title} />
        </div>
    );
}

export default AboutPage;