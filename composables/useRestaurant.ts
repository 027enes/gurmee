export const useRestaurant = (restaurant: string) => {
    return useFetch(`/restaurant`, {
        method: 'POST',
        body: {
            restaurant: restaurant,
        },
        key: 'restaurant',
    });
};