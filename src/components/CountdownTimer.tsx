import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0)

    useEffect (() => {
        let timer : NodeJS. Timeout ;
        if (isRunning && remainingTime > 0 ){
            timer = setInterval(() => {
                setRemainingTime((prev) => prev - 1)
            }, 1000)
        }
        else if (remainingTime === 0) {
            setIsRunning(false)
        }
        return () => clearInterval(timer);
    }, [isRunning, remainingTime])

    const handleStart = () => {
        if (time > 0) {
            setRemainingTime(time)
            setIsRunning(true)
        }
    }
    const handlePause = () => {
        setIsRunning(false)
        
    }
    const handleReset = () => {
        setIsRunning(false)
        setRemainingTime(0)
        setTime(0)
    }
    const handleStop = () => {
        setIsRunning(false)
    
        
    }
    return (
        <div className="flex flex-col min-h-screen
        items-center justify-center bg-gradient-to-br
        from-black to-black">

            <h1 className="text-4xl font-extrabold uppercase mb-6 text-white">
                CountDownTimer

            </h1>
            <input 
            type = "number"
            className="border-2 border-white-400 bg-transparent p-3
            mb-6 text-sky-400 text-xl rounded"
            placeholder="Enter Time In Seconds"
            value={time > 0 ? time : ""}
            onChange={(e) => setTime(Number(e.target.value))}
            />

            <div className="text-3x1font-semibold uppercase mb-6
            text-white">
                {remainingTime} seconds remaining

            </div>

             <div>
                <button
                    onClick={handleStart}
                    className="text-white px-8 py-4 rounded-lg font-normal
                    bg-gradient-to-r from-blue-300 to-teal-400
                    hover:from-blue-600 hover:to-teal-600">
                        Start
                
                    </button>

                    <button
                    onClick={handlePause}
                    className="text-white px-8 py-4 rounded-lg font-normal
                    bg-gradient-to-r from-yellow-300 to-orange-400
                    hover:from-yellow-600 hover:to-orange-600">
                        Pause
                
                    </button>

                    <button
                    onClick={handleReset}
                    className="text-white px-8 py-4 rounded-lg font-normal
                    bg-gradient-to-r from-red-300 to-pink-400
                    hover:from-red-600 hover:to-pink-600">
                        Reset
                
                    </button>

                    <button
                    onClick={handleStop}
                    className="text-white px-8 py-4 rounded-lg font-normal
                    bg-gradient-to-r from-green-500 to-yellow-500
                    hover:from-red-600 hover:to-yellow-600">
                        Stop
                
                    </button>

                    <footer className="mt-10 text-white text-center">
                        Prepared by Muhammad Mubashir Ali
                    </footer>
         
           
           

             </div>






        </div>
    )

}

export default CountdownTimer


