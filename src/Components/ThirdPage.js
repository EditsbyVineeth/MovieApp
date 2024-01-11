import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function ThirdPage() {
  const initialData = [
    {
      question: 'What is Movieflix?',
      answer: `Movie flix is a Netflix clone developed for learning purpose.`
    },
    {
      question: 'What can I watch on Movieflix?',
      answer: `Movieflix offers streaming of wide variety of award-winning TV shows,
      movies, anime, documentaries and more – on thousands of internet-connected devices.`,
    },
    {
      question: 'Where you get the data ?',
      answer: ' I integrated TMDB movie API in this app ',
    },
    {
      question: 'What are the technologies used for devlopment ?',
      answer: `I have used a variety of frontend tools and frameworks such as ReactJs,CSS, TailwindCSS,TMDB API,
      Axios, react-youtuebe,movie trialers,
      `,
    },
    {
      question: 'Is it responsive ?',
      answer: 'Yes this is completely responsive',
    },
    {
      question: 'Is Movieflix available on mobile devices?',
      answer: 'Yes, Movieflix is available on various devices tablets, mobile phones, personal computers ,',
    },
    // Add more objects for each question-answer pair as needed
  ];

  const [showAnswers, setShowAnswers] = useState(Array(initialData.length).fill(false));

  const handleAnswerClick = (index) => {
    setShowAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  return (
    <div className="w-full border-4 border-gray-500 pb-16 pt-16 md:pb-28 md:pt-20 flex text-white flex-col items-center justify-center gap-4">
      <span className="text-4xl font-extrabold mb-10"> Frequently Asked Questions?</span>

      {/* Loop through the question-answer data */}
      {initialData.map((data, index) => (
        <div key={index} className="w-10/12 transition-all duration-1000">
          <div className="flex items-center justify-between text-left text-2xl font-semibold bg-gray-700 p-4">
            {data.question}
            <button onClick={() => handleAnswerClick(index)}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className={`${showAnswers[index] ? 'flex' : 'hidden'} transition-all duration-1000 text-left bg-gray-500 text-2xl p-4 `}>
            {data.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
