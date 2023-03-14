import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://new-news-server.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsSearch></BsSearch></InputGroup.Text>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            {
                categories.map(category => <p key={category.id}>
                    <Link className='btn btn-light' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;