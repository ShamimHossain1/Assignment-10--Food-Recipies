
import React from 'react';
import './Blog.css'
import { Button } from 'flowbite-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Blog = () => {

    const onButtonClick = () => {
        const capture = document.querySelector('.document')
      
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png')
            const doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: [4, 2]
              });
              
              
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
           
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('document.pdf');

        })
    }


    return (


        <div className='question-container  lg:px-80'>


            <Button className='mx-auto' onClick={onButtonClick}> Download as PDF</Button>
            <div className='document'>
            <div className='question '>
                <h3 >1. When should you use context API? </h3>
                <p >Ans: Context API allows you to share data between components without having to pass the data through every level of the component tree manually. If i have to applied a function across multiple components then i can use Context API to manage the function data and update it as necessary.</p>
            </div>
            <div className='question'>
                <h3 >2. What is custom Hook? </h3>
                <p>Ans: Custom hook is a function that uses one or more of the existing React hooks to provide additional functionality that can be reused across multiple components. Custom hook is a way to share logic between components.</p>
            </div>
            <div className='question'>
                <h3 >3. what is useRef & useMemo? </h3>
                <p >Ans: useRef is a hook that returns a mutable ref object whose current property is initialized to the provided argument or undefined  <br />
                    useMemo is a hook that memoizes the result of a function, caching its return value and returning it only when its dependencies have changed. </p>
            </div>
            </div>


        </div>
    );
};

export default Blog;