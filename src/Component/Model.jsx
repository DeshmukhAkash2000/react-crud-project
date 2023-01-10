import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const DealerModel = ({
  showModel,
  modelHandeler,
  dealer,
  setDealer,
  addDealer,
  ownerName,
  setOwnerName,
  ownerLocation,
  setOwnerLocation,
}) => {
  return (
    <div>
      {showModel ? (
        <div class="">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Dealer</h5>
                <p>All Fields are mandatory!</p>
                <button
                  onClick={modelHandeler}
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlInput1" class="form-label">
                  Dealer's Name
                </label>
                <input
                  value={dealer.name}
                  onChange={(e) =>
                    setDealer({ ...dealer, name: e.target.value })
                  }
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Dealer's Name"
                />
                <label class="form-label">Location</label>
                <input
                  value={ownerLocation.longitude}
                  onChange={(e) =>
                    setOwnerLocation({
                      ...ownerLocation,
                      longitude: e.target.value,
                    })
                  }
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Longitude"
                />
                <input
                  value={ownerLocation.latitude}
                  onChange={(e) =>
                    setOwnerLocation({
                      ...ownerLocation,
                      latitude: e.target.value,
                    })
                  }
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Latitude"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Total Budget
                </label>
                <input
                  value={dealer.totalBudget}
                  onChange={(e) =>
                    setDealer({ ...dealer, totalBudget: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Total Budget"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Remaining Budget
                </label>
                <input
                  value={dealer.remainingBudget}
                  onChange={(e) =>
                    setDealer({ ...dealer, remainingBudget: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Remaining Budget"
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Owner's First Name
                </label>
                <input
                  value={ownerName.firstName}
                  onChange={(e) =>
                    setOwnerName({ ...ownerName, firstName: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Owner's First Name"
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Owner's Last Name
                </label>
                <input
                  value={ownerName.lastName}
                  onChange={(e) =>
                    setOwnerName({ ...ownerName, lastName: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Owner's Last Name"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={modelHandeler}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={addDealer}
                >
                  Save changes
                </button>
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

export { DealerModel };
