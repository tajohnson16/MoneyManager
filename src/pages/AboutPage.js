import React from 'react';
import Jumbo from '../components/Jumbo';
import aboutPagePic from '../assets/AboutPagePic.jpg'

function AboutPage(props) {
    return (
        <div>
            <Jumbo title={props.title} />
            <div class="px-4 text-center">
                <img class="d-block mx-auto mb-4" src={aboutPagePic} alt="" width="300px" style={{ borderRadius: '50%' }} />
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4" style={{ lineHeight: 1.8 }}>
                        <b style={{ fontWeight: 'bold' }}>This is not another budget tracking application.</b> The point of this application
                    is to simply give a quick look at what real world finances might look like. Many
                    college students get a job offer in their final year of school and don't know what their
                    finances could potentially look like. This happened to me, and it spiked my curiousity
                    on the subject of finances for working adults.

                    </p>
                    <p class="lead mb-4" style={{ lineHeight: 1.8 }}>
                        I believe that anyone can avoid living
                        paycheck to paycheck, but many are not introduced to the idea early
                        enough. My hope for this application is that it gets people interested in the idea of
                        financial stability.
                        <br />
                        <br />
                        <b style={{ fontWeight: 'bold', fontSize: 'larger', textDecoration: 'underline' }}>Financial Stability = Freedom</b>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default AboutPage;