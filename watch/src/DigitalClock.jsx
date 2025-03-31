import { useEffect, useState } from "react"

function DigitalClock() {

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intravalId = setInterval(() => {
            setTime(new Date())
        },1000);
    },[])

    function prityTime(time){
        return (time>=10 ? time : `0${time}`)
    }
    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours > 12 ? 'pm' : "am";
        hours = hours % 12 || 12;
        return(`${prityTime(hours)}:${prityTime(minutes)}:${prityTime(seconds)} ${ampm}`)
    }
  
    return (
      <>
      <div className="clock-container">
        <div className="clock">
                <span>{formatTime()}</span>
        </div>
      </div>
        
      </>
    )
  }
  
  export default DigitalClock