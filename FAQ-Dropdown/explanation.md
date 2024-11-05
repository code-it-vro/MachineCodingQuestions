# 📘 FAQ App in React

This app is designed to display a list of frequently asked questions (FAQs) where each question can be expanded or collapsed to reveal its answer. The code is modularized across three components: `App`, `FAQ`, and `Individual`.

## 🛠️ Components Overview and Workflow

### 1. App Component (`App.js`):
   - **Purpose**: This is the main component that wraps and displays the entire FAQ section.
   - **Key Structure**:
     - Contains a `main` div for styling and layout.
     - Displays a title (`<h1>Frequently Asked Questions</h1>`).
     - Imports and renders the `FAQ` component to display the list of questions.

### 2. FAQ Component (`FAQ.js`):
   - **Purpose**: Manages the list of questions and iterates over them to render each as an `Individual` component.
   - **Props and Data Handling**:
     - An array of questions and answers is defined within this component. This could also be imported from an external source if the FAQ list is large or dynamic.
     - Maps over the `questions` array and renders each question-answer pair by passing them as props (`ques` and `ind`) to the `Individual` component. The `ind` prop is the index of each question, which helps to control which question is initially open.
   - **Why Separate This Component**:
     - Organizing the FAQ list here keeps the `App` component cleaner and allows for easy updates or replacements of the question data. It also prepares the structure for future expansion, like loading questions from an API.

### 3. Individual Component (`Individual.js`):
   - **Purpose**: Represents each question-answer pair and provides functionality to expand or collapse the answer when clicked.
   - **State Management**:
     - Uses the `isOpen` state to control whether the answer is visible.
     - A click handler (`handleClick`) toggles `isOpen`, showing or hiding the answer.
   - **Initial State with `useEffect`**:
     - The first question is set to open by default using `useEffect`. This effect checks if the current question’s index (`ind`) is `0`, and if so, it sets `isOpen` to `true`.
   - **Why Separate This Component**:
     - Splitting each FAQ item into an `Individual` component promotes reusability and keeps the code modular. This design allows for each item to be independently managed, which would be useful if each question had more complex behavior or required additional styling or state logic.

## 🔄 Code Flow Summary

- The **`App` component** initializes the application, rendering the FAQ title and the list of questions.
- The **`FAQ` component** maps over a list of questions and passes each one as props to the `Individual` component.
- The **`Individual` component** handles the individual question-answer pairs, allowing users to toggle visibility and setting the first question to be open by default.

## ✨ Key Learnings and Takeaways

1. **Prop Passing**:
   - `ques` and `ind` are passed as props from the `FAQ` component to `Individual`, demonstrating how props allow data to flow between components in React.

2. **State Management with Hooks**:
   - `useState` controls the open/close state of each question.
   - `useEffect` is used for conditional rendering on the initial load (opens the first question by default).

3. **Component Modularity**:
   - Breaking down components (App → FAQ → Individual) makes the application more organized, promotes reusability, and improves readability.

By structuring the app in this modular way, it becomes easier to manage, extend, and maintain. This structure is flexible for further enhancements, such as adding animations, loading questions from an API, or adding accessibility features.
