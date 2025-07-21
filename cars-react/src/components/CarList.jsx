import {useSelector, useDispatch} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {removeCar} from "../store";

const memoizedCars = createSelector(
  // DECIDE IF THIS CAR SHOULD BE BOLD
  // state.form.name

  // Updated version with the use of createSelector
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

function CarList() {
  const dispatch = useDispatch();

  // Change the useSelector usage since an update in react-redux
  // const cars = useSelector(({cars: {data, searchTerm}}) => {
  //   return data.filter((car) =>
  //     car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // });

  const cars = useSelector(memoizedCars);
  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
export default CarList;
