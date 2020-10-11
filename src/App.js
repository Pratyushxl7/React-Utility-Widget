import React from 'react';
import Accordian from './components/Accordian';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import DropDown from './components/Dropdown';

const items=[
    {question: 'Question 1', answer: 'Answer 1'},
    {question: 'Question 2', answer: 'Answer 2'},
    {question: 'Question 3', answer: 'Answer 3'},
    {question: 'Question 4', answer: 'Answer 4'},
    {question: 'Question 5', answer: 'Answer 5'}
];

const options = [
    {
        label: "The Color Red",
        value: "Red"
    },
    {
        label: "The Color Green",
        value: "Green"
    },
    {
        label: "The Color Blue",
        value: "Blue"
    }
]

export default () => {
    return (<div><DropDown content={options}/></div>);
}