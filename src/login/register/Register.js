import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AauthContext } from '../../Pages/News/News/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const [error, setError] = useState();
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile } = useContext(AauthContext)
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const PhotoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, PhotoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                hadleUpdatedProfile(name, PhotoURL);
                navigate('/');
                toast.success('Account Created Successfully.')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
    const hadleUpdatedProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter You Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photoURL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="photoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                    type='checkbox'
                    onClick={handleAccepted}
                    label={<>Accept<Link to='/terms'>Terms and Condition</Link></>} />
            </Form.Group>
            <Button variant="primary" type="register" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;