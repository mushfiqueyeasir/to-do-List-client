import React, { useEffect, useState } from 'react';

const useTask = (url) => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [tasks])
    return [tasks, setTask];
};

export default useTask;