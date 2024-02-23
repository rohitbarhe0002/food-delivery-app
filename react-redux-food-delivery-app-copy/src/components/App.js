import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import MenuItems from './MenuItems';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
localStorage.getItem('doNotShowModalAgain') ? setIsOpen(false) : setIsOpen(true);
  },[])
  
  const handleClose = () => setIsOpen(false);
  

  const handleDoNotShowAgain = () => {
    localStorage.setItem('doNotShowModalAgain', true);
    setIsOpen(false);
  };

  const renderWelcomeModal = () => {
    return ( 
      <Modal
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered  
      >
        <Modal.Header closeButton>
          <Modal.Title>Welcome to My Food Store!</Modal.Title>
        </Modal.Header>   
        <Modal.Body className="text-center">
        
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDoNotShowAgain}>
            Do not show again
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
 
  return (
    <div>
      <Carousel />
     {renderWelcomeModal()}
      <div className="menu-title" id="menu-section">
        <h3 className="menu-title-heading">Food that you will love to taste</h3>
        <p className="menu-title-subheading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta
          nemo unde deleniti atque provident. Blanditiis sint, veritatis
          necessitatibus consectetur, expedita laboriosam reiciendis aliquid ut
          cum tempore temporibus nam perspiciatis.
        </p>
      </div>
      <MenuItems />
      <Footer />
    </div>
  );
}

export default App;
