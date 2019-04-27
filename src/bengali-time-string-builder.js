
class BengaliTimeStringBuilder {
    build = time => {
        let hours = time.getHours();
        if (hours >= 6 && hours < 12) {
            return '06:00:00 Sokal';
        }
        if (hours >= 12 && hours < 16) {
            return '12:00:00 Dupur';
        }
        if (hours >= 16 && hours < 18) {
            return '04:00:00 Bikal';
        }
        if (hours >= 18 && hours < 20) {
            return '06:00:00 Sondha';
        }
        return '08:00:00 Raat';
    }
}

export default BengaliTimeStringBuilder;