import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddCarModel = ({
  showModel,
  setShowModel,
  carDetail,
  setCarDetail,
  car,
  setCar,
  addCar,
}) => {
  return (
    <div>
      {showModel ? (
        <div>
          <div>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Car</h5>
                  <p>All Fields are mandatory!</p>
                  <button
                    onClick={() => setShowModel(false)}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="modal-body">
                  <label for="exampleFormControlInput1" className="form-label">
                    Brand
                  </label>
                  <input
                    value={car.brand}
                    onChange={(e) => setCar({ ...car, brand: e.target.value })}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Brand"
                  />
                  <label className="form-label">Model</label>
                  <input
                    value={car.model}
                    onChange={(e) => setCar({ ...car, model: e.target.value })}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Model"
                  />
                  <label for="exampleFormControlInput1" className="form-label">
                    Color
                  </label>
                  <input
                    value={car.color}
                    onChange={(e) => setCar({ ...car, color: e.target.value })}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Color"
                  />
                  <label for="exampleFormControlInput1" className="form-label">
                    Price
                  </label>
                  <input
                    value={car.price}
                    onChange={(e) => setCar({ ...car, price: e.target.value })}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Price"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => setShowModel(false)}
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={addCar}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export { AddCarModel };
