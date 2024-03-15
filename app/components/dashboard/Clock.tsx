'use client'

import React, {useEffect, useState} from 'react';
import {blackOpsOne} from "@/app/ui/fonts";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Synchronize initial time with the client
        const initialTime = new Date();
        const timeToWait = 1000 - initialTime.getMilliseconds();
        setTimeout(() => {
            setTime(new Date());
        }, timeToWait);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: any) => {
        return time.toLocaleTimeString();
    };

    const getTimezone = () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return timezone;
    };

    return (
        <>
            <div className={`${blackOpsOne.className} antialiased text-4xl`}>{formatTime(time)}</div>
            <div>{getTimezone()}</div>
        </>
    );
};

export default Clock;
