import React, { useState, useEffect } from 'react'
import axios from 'axios';
const PersonList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const { people, setPeople } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then((res) => {
                console.log(res.data);
                console.log(Array.isArray(res.data));
                setPeople(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {
                people.map((person, index) => {
                    return <p key={index}>{person.lastName}, {person.firstName}</p>
                })
            }
        </div>
    )
}
export default PersonList;