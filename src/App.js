import React from 'react';
import Accordian from './components/Accordian';
import Search from './components/Search';

const items=[
    {question: 'Question 1', answer: 'Answer 1'},
    {question: 'Question 2', answer: 'Answer 2'},
    {question: 'Question 3', answer: 'Answer 3'},
    {question: 'Question 4', answer: 'Answer 4'},
    {question: 'Question 5', answer: 'Answer 5'}
];

export default () => {
    return (<div><Search /></div>);
}