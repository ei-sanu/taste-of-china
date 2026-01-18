export const isRestaurantOpen = (): boolean => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Restaurant hours: 12:00 PM - 10:30 PM (12:00 - 22:30)
    const openingHour = 12;
    const openingMinute = 0;
    const closingHour = 22;
    const closingMinute = 30;

    // Convert current time to minutes since midnight
    const currentMinutes = hours * 60 + minutes;
    const openingMinutes = openingHour * 60 + openingMinute;
    const closingMinutes = closingHour * 60 + closingMinute;

    return currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;
};

export const getBusinessHoursStatus = (): { isOpen: boolean; statusText: string; statusColor: string } => {
    const isOpen = isRestaurantOpen();

    return {
        isOpen,
        statusText: isOpen ? 'Open now' : 'Closed',
        statusColor: isOpen ? 'text-green-600' : 'text-red-600'
    };
};
