import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AauthContext } from '../../Pages/News/News/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Rightsidenav = () => {

    const { providerLogin } = useContext(AauthContext)
    const googleProvider = new GoogleAuthProvider()
    const handlesubmit = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h3>RigthSide Nav</h3>
            <ButtonGroup vertical>
                <Button onClick={handlesubmit} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Log in With Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLinkedin></FaLinkedin>Linked In</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube>Tik Tok</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default Rightsidenav;