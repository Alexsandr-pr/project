


const Stats = ({
    timeReading,
    dateAdded,
    type
}) => {
    return (
        <div className="flex items-center gap-4 justify-between">
            <div className="text-grey-500 text-xs font-light gap-0.5 items-center flex">
                <img src="/assets/icon/calendar.svg" alt="calendar" />
                {dateAdded}
            </div>
            {
                type !== "stroke"  &&

                <div className="text-grey-500 text-xs font-light gap-0.5 items-center flex">
                    <img src="/assets/icon/timer.svg" alt="timer" />
                    {timeReading}min read
                </div>
            }
        </div>
    )
}

export default Stats