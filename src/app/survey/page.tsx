"use client";
import Question from "@/components/Question/Question";

const questions = [
  {
    id: 1,
    question: "For what purpose do you want to use the application?",
    options: ["Work", "Studies", "Creation"],
  },
  {
    id: 2,
    question: "How often do you plan to use the application?",
    options: ["Daily", "Once a week", "Once a month"],
  },
  {
    id: 3,
    question: "Are you ready to tell your friends about us if you like the app?",
    options: ["Yes", "No"],
  },
];

const page = () => {
  return (
    <div>
      {questions.map((que) => {
        return <Question key={que.id} queTitle={que.question} queAnswers={que.options} />;
      })}
    </div>
  );
};

export default page;
