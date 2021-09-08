import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg'

//zamiast wypisywać linki bezpośrednio w tym komponencie można stworzyć oddzielny plik z danymi do linków oraz social mediów a w tym komponencie po prostu renderować 

const Navbar = () => {
  //pokazywanie linków po wciśnięciu burger button
  const [showLinks, setShowLinks] = useState(false);
  //useRef do złapania kontener z linkami
  const linksContainerRef = useRef(null);
  // useRef do uchwycenia ul z linkami
  const linksRef = useRef(null);
  //za każdym razem jak zmienia się zmienna showlinks to będziemy sprawdzać długość listy z linkami żeby ustawić odpowiednią wysokość contenera na linki i poprawnie je wszystkie wyświetlać
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //zwraca obiekt z wymiarami elementu top, left, right i bottom, żeby było height to linki muszą być opakowane rodzicem
    //ustawiamy conditionala do pokazania linków zależnie od wysokości listy
    //ale trzeba pamiętać, że dla stylu powyżej 800px musimy dać ustawienie wysokości kontenera na auto i !important bo tutaj styl jest liniowy i trzeba go nadpisać
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
          {/* na tym etapie są zwykłe linki, później będzie react-router */}
          {/* przykład wykorzystania zewnętrznych danych do wyświetlenia linków, bardzo użyteczne bo dobre do utrzymania kodu */}
          {/* prosty toggle na wciśnięcie navbar polega na wykorzystaniu conditionala że zmienna showlinks jest true */}
          {/* lepszym rozwiązaniem jest warunkowe wyświetlanie klas*/}
          {/* kolejnym problemem jest, że jeżeli w przyszłości będziemy zmieniać ilość linków to dobrze by było zamiast zmieniania ręcznie wielkości link-container robić to dynamicznie, można do tego wykorzystać useRef */}
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map( link => {
                const {id, url, text} = link;
                return <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
              })}
            </ul>
          </div>
        <ul className="social-icons">
          {social.map( media => {
            const {id, url, icon} = media;
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
  </nav>
}

export default Navbar;