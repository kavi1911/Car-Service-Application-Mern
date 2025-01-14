const BASE_URL =  'http://localhost:5000';

const globalAPI = {
  getAllCars : `${BASE_URL}/api/cars/getAllCars`,
  useLogin : `${BASE_URL}/api/users/login`,
  userRegister : `${BASE_URL}/api/users/register`,
  bookCar : `${BASE_URL}/api/bookings/bookCar`,
  getAllBooking : `${BASE_URL}/api/bookings/getallbookings`,
  addNewCar : `${BASE_URL}/api/cars/addNewCar`,
  editCar : `${BASE_URL}/api/cars/editCar`,
  deleteCar : `${BASE_URL}/api/cars/deleteCar`
}

export default globalAPI