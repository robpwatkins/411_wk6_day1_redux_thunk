const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                // console.log(response.Results.map(make => make.MakeName))
                const action = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}

export default fetchMakes;