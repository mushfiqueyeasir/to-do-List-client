import React, { useEffect, useState } from 'react';

const useSingleTask = (id) => {
    const [tasks, setTask] = useState([]);
    const url = `https://to-do-list-113.herokuapp.com/taskList/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return tasks;
};

export default useSingleTask;