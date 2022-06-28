import React, {useEffect} from 'react';
import icon from './Icons';
import profile from "./profile.jpg";
import logo from "./logo.svg";
import './App.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        AOS.refresh();
  }, []);

    return (
        <div className="App">
            <div className="body">
                <header>
                    <div className="container">
                        <div data-aos="fade-up" className="profile">
                            <img src={profile} alt="" />
                            <h1>@bss.graff</h1>
                            <p>• V A Z I O •</p>
                            <p><i>Todos nós temos um vazio.</i></p>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <div data-aos="fade-up" className="itens-container">
                            <a data-aos="fade-up" data-aos-delay="100" href="https://www.instagram.com/bss.graff/" className='item'>{icon.instagram} Instagram</a>
                            <a data-aos="fade-up" data-aos-delay="200" href="https://twitter.com/bss_graff" className='item'>{icon.twitter} Twitter</a>
                            <a data-aos="fade-up" data-aos-delay="300" href="mailto:bss.graff@gmail.com" className='item'>{icon.email} E-mail</a>
                        </div>
                    </div>
                </main>
                <footer>
                    <div data-aos="fade-up" data-aos-delay="400" className="container">
                        <div className="row text-center">
                            <div className="col-12"><p>&copy; Copyright - @bss.graff</p></div>
                        </div>
                    </div>
                </footer>
                <div className="bss-popup">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default App;
