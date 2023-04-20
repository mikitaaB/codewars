function determineTime (durations) {
    const hours = durations.map(duration => {
        return duration.split(":").reduce((acc, time, i) => {
            switch (i) {
                case 0:
                    time = +time;
                    break;
                case 1:
                    time = +time/60;
                    break;
                case 2:
                    time = +time/3600;
                    break;
                default:
                    time = +time;
            }
            return acc + time;
        }, 0);
    })
    return hours.reduce((acc, hour) => acc + hour, 0) <= 24;
}