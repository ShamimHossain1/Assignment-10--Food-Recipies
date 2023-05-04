
import React, { useRef } from 'react';
import './Blog.css'
import { Button } from 'flowbite-react';
import ReactToPrint from 'react-to-print';



const Blog = () => {


    const ref = useRef()


    return (


        <div className='question-container  lg:px-80'>

            <ReactToPrint trigger={() =>

                <Button className='mx-auto'> Download as PDF</Button>

            } content={() => ref.current} />




            <div ref={ref} className=''>
                <div className='question '>
                    <h3 >1. Tell us the differences between uncontrolled and controlled components. </h3>
                    <p >Ans: In an uncontrolled component, the DOM handles the form data by itself in the component. Whereas in a controlled <br /> component, the state is used to handle the form data within the component.</p>
                </div>
                <div className='question'>
                    <h3 >2. How to validate React props using PropTypes? </h3>
                    <p>Ans: To validate React props using PropTypes, you need to import the PropTypes module from the 'prop-types' <br /> package and define the expected data types and other constraints for each prop using the propTypes property of the component.</p>
                </div>
                <div className='question'>
                    <h3 >3. Tell us the difference between nodejs and express js. </h3>
                    <p >Ans: NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. <br /> Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications. </p>
                </div>
                <div className='question'>
                    <h3 >4. What is a custom hook, and why will you create a custom hook? </h3>
                    <p >Ans: Custom React JS hooks are reusable functions that a React JS software developer can <br /> use to add special and unique functionality to the React applications. </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;