import React, {useState} from 'react'

const Clock = () => {

    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time)
    }
    setInterval(updateTime, 1000)

    return(
        <div className="outer-div">
        <div className="clock-div">
            <h1>{ctime}</h1>
            {/* <button onClick={updateTime}>Click</button> */}
        </div>
        </div>
    ) 
}

export default Clock