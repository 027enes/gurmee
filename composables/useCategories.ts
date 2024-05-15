export const useCategories = (restaurant: string) => {
    return useFetch(`/restaurant/categories`, {
        method: 'POST',
        body: {
            restaurant: restaurant,
            locale: 'tr',
        },
        key: restaurant + '-categories-' ,
    });
};