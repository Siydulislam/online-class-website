import React from 'react';

const Courses = (props) => {
    const {name, price} = props.course;
    return (
        <div className="card text-center mt-5">
            <div className="card-header bg-dark text-white">
                <h1>{name}</h1>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, error eligendi! Eligendi ratione eius aliquam voluptates dolor vel molestias similique?</p>
                <h2 className="text-secondary">${price}</h2>
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => props.handleAddCourse(props.course)}>Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Courses;