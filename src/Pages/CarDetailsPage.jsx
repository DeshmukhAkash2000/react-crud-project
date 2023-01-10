import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AddCarModel } from "../Component/AddCarModel";
import { useNavigate } from "react-router-dom";
import "./Comman.css";
const cars = [
  {
    id: 1001,
    name: "Toyota Fortuner",
    model: "2018",
    brand: "toyota",
    price: "3500",
    color: "White",
  },
  {
    id: 1002,
    name: "Hyundai Create",
    model: "2022",
    brand: "Hyundai",
    price: "2500",
    color: "black",
  },
  {
    id: 1003,
    name: "Suzuki Swift",
    model: "2021",
    brand: "Suzuki",
    price: "3400",
    color: "Red",
  },
];
const CarDetails = () => {
  const [showModel, setShowModel] = useState(false);
  const [car, setCar] = useState({});
  const [carDetail, setCarDetail] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [carSearchStr, setCarSearchStr] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const navigate = useNavigate();

  const addCar = () => {
    const addedCars = {
      id: new Date().getTime().toString(),
      name: car.brand,
      model: car.model,
      price: car.price,
      color: car.color,
    };

    if (
      !addedCars.name ||
      !addedCars.model ||
      !addedCars.price ||
      !addedCars.color
    ) {
      alert("Please, fill all fields!!");
    } else if (isEdit && isEditItem) {
      const editedCars = {
        id: new Date().getTime().toString(),
        name: car.brand,
        model: car.model,
        price: car.price,
        color: car.color,
      };
      const editedCarArr = carDetail.map((car) =>
        car.id === isEditItem ? { ...editedCars } : car
      );
      setCarDetail(editedCarArr);
      setCar({});
      setShowModel(false);
      isEdit(false);
      isEditItem(null);
    } else {
      setCarDetail([...carDetail, addedCars]);
      setDataToShow([...carDetail, addedCars]);
      setCar({});
      setShowModel(false);
    }
  };

  const deleteCar = (id) => {
    const updatedCarsList = carDetail.filter((car) => {
      return id !== car.id;
    });
    setCarDetail(updatedCarsList);
  };

  const CarSearchHandler = () => {
    if (carSearchStr.length > 0) {
      const data = carDetail.filter((item) =>
        item.name.toLowerCase().includes(carSearchStr.toLowerCase())
      );
      setCarDetail(data);
    } else {
      setCarDetail(dataToShow);
    }
  };

  const editCarHandler = (id) => {
    setIsEdit(true);
    const editCar = carDetail.find((car) => {
      return car.id === id;
    });
    setShowModel(true);
    setIsEditItem(editCar.id);
    setCar({
      ...car,
      brand: editCar.name,
      model: editCar.model,
      price: editCar.price,
      color: editCar.color,
    });
  };

  useEffect(() => {
    CarSearchHandler();
  }, [carSearchStr]);

  useEffect(() => {
    setDataToShow(cars);
    setCarDetail(cars);
  }, []);

  return (
    <div className="p-relative">
      <h2 className="heading-txt">Car Details</h2>
      <div className="d-flex justify-content-around">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                onChange={(e) => setCarSearchStr(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                title="Search"
                autoFocus
              />
            </form>
          </div>
        </nav>
        <div>
          <Button
            onClick={() => setShowModel(true)}
            title="Add Dealer"
            variant="contained"
            k
            size="small"
            startIcon={<AddIcon />}
            className="btn btn-primary mr-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@fat"
          >
            Add Car
          </Button>
          <Button
            onClick={() => navigate("/")}
            title="Add Dealer"
            variant="contained"
            k
            size="small"
            startIcon={<AddIcon />}
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@fat"
          >
            Go Back
          </Button>
        </div>
      </div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {carDetail.map((car, index) => {
          return (
            <>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{car.name}</td>
                  <td>{car.model}</td>
                  <td>{car.color}</td>
                  <td>${car.price}</td>
                  <td>
                    <Button
                      onClick={() => editCarHandler(car.id)}
                      className="mr-2"
                      title="Edit"
                      //   onClick={() => editDealer(item.id)}
                      variant="contained"
                      startIcon={<EditIcon />}
                      color="success"
                    >
                      Edit
                    </Button>
                    <Button
                      title="Delete"
                      onClick={() => deleteCar(car.id)}
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      color="error"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <div className="p-absolute">
        <AddCarModel
          showModel={showModel}
          setShowModel={setShowModel}
          carDetail={carDetail}
          setCarDetail={setCarDetail}
          car={car}
          setCar={setCar}
          addCar={addCar}
        />
      </div>
    </div>
  );
};

export default CarDetails;
