import React from 'react';

import WelcomeContent from '../components/Welcome';
import Services1 from '../components/Services';
import Portfolio1 from '../components/portfolio1';
import Testmonials from '../components/Testimonials';
import Blog1 from '../components/blog';
import Brands from '../components/brands';


function Home() {
    return(
        <>
            
                <WelcomeContent  />
            
            <main>
                <section className='text-start'>
                    <Services1 />
                    <Portfolio1 />
                    <Testmonials />
                    <Blog1 />
                    <Brands />
                    
                </section>
            </main>
        </>
    )
}

export default Home;