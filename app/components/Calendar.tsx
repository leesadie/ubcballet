'use client';

import React from "react";

const Calendar: React.FC = () => {
    return (
        <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FVancouver&bgcolor=%23ffffff&showPrint=0&showCalendars=0&title=UBC%20Ballet%20Club&src=dWJjYmFsbGV0Y2x1YkBnbWFpbC5jb20&src=Y2ZjMHVncDRyMXFjc2hidGkxcWFkZ21tOWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%237CB342"
            style={{ border: 'solid 1px #777' }}
            width="1200"
            height="700"
            className="md:w-[1200px] w-[350px] md:h-[700px] h-[350px]"
        />
    );
}

export default Calendar;