import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first12 = fakeData.slice(0,12);
    const [courses, setCourses] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-9">
                        {
                            courses.map(course => <Courses 
                                handleAddCourse = {handleAddCourse}
                                course={course}>
                                </Courses>)
                        }
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;