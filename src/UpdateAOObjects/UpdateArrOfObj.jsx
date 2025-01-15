/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const UpdateArrOfObj = () => {
    const [Cars, setCars] = useState([]);
    const [CarMake, setCarMake] = useState("");
    const [Model, setCarModel] = useState("");
    const [CarYear, setCarYear] = useState(new Date().getFullYear());

    function handleAddCar() {
        const newCars = { year: CarYear, Make: CarMake, Model: Model };
        setCars((c) => [...c, newCars]);
        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }
    function handleRemoveCar(index) {
        setCars((c) => c.filter((_, i) => i !== index));
    }
    function handleYearChange(e) {
        setCarYear(e.target.value);
    }
    function handleModelChange(e) {
        setCarModel(e.target.value);
    }
    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }

    return (
        <div>
            <h2>Lists of Car Objects</h2>

            <ul>
                {Cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.Make} {car.Model}
                    </li>
                ))}
            </ul>
            <input type="number" value={CarYear} onChange={handleYearChange} />
            <input
                type="text"
                value={CarMake}
                placeholder="Enter details"
                onChange={handleMakeChange}
            />
            <input
                type="text"
                value={Model}
                placeholder="Enter details"
                onChange={handleModelChange}
            />

            <button onClick={handleAddCar}> Add Elements</button>
        </div>
    );
};

export default UpdateArrOfObj;
