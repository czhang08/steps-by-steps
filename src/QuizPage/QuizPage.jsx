import React from 'react';
import NavBar from '../NavBar/NavBar';
import BGImage from '../BGImage/BGImage';
import Footer from '../Footer/Footer';
import QuizForm from '../QuizForm/QuizForm';
import './QuizPage.css';

const QuizPage = (props) => {
    return (
        <div>
            <NavBar/>
           
            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.pexels.com/photos/1115090/pexels-photo-1115090.jpeg?cs=srgb&dl=beautiful-flowers-bloom-blossom-1115090.jpg&fm=jpg"
                        title="Environmental Impact Quiz"
                        position="bottom"
                        />
                }
            <div className="page-container">
                <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                <QuizForm/>
            </div>
        </div>
        <Footer/>
        
</div>
    );
};
export default QuizPage;