import React, { useState } from 'react';

const MemberForm = props => {
    const [team, setTeam] = useState({
        name: " ",
        email: " ", 
        role: " "
    });

    const handleChanges = event => {
        setTeam({...team, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(team);
        setTeam({name: "", email: "", role: ""});
    };


    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={team.name}
                onChange={handleChanges}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={team.email}
                onChange={handleChanges}
            />
            <label htmlFor="role">Role</label>
            <input 
                type="text"
                placeholder="Role"
                id="role"
                name="role"
                value={team.role}
                onChange={handleChanges}
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default MemberForm;