import React from 'react'
import Individual from './individual';

const FAQ = () => {
     const questions = [
       {
         question: "What is React?",
         answer:
           "React is a JavaScript library for building user interfaces, especially single-page apps.",
       },
       {
         question: "What are components in React?",
         answer:
           "Components are reusable parts of the UI, either functions or classes that return HTML.",
       },
       {
         question: "What is the difference between state and props?",
         answer:
           "State is local and mutable, while props are read-only data passed from parent to child.",
       },
       {
         question: "What is JSX?",
         answer:
           "JSX is a syntax that lets you write HTML in JavaScript, making it easier to create elements.",
       },
       {
         question: "What is a hook in React?",
         answer:
           "Hooks are functions that let you use React features, like state, in functional components.",
       },
       {
         question: "What does the useEffect hook do?",
         answer:
           "useEffect handles side effects, like fetching data, and runs after each render by default.",
       },
     ];


  return (
    <div>
      {questions.map((ques,ind)=>{
        return <Individual ques = {ques} ind = {ind}/>
      })}
    </div>
  )
}

export default FAQ
