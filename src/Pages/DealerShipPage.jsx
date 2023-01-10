import React from "react";
import "./Comman.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DealerModel } from "../Component/Model";
import { useNavigate } from "react-router-dom";

const dealersListArr = [
  {
    id: 10001,
    name: "My Dealer 1",
    totalBudget: "3500",
    remainingBudget: "2200",
    owner: { firstName: "My Name1", lastName: "My LastName1" },
    ownerLocation: {
      longitude: "12345",
      latitude: "67890",
    },
  },
  {
    id: 10002,
    name: "My Dealer 2",
    totalBudget: "4500",
    remainingBudget: "3200",
    owner: { firstName: "My Name2", lastName: "My LastName2" },
    ownerLocation: {
      longitude: "12345",
      latitude: "67890",
    },
  },
  {
    id: 10003,
    name: "My Dealer 3",
    totalBudget: "6500",
    remainingBudget: "2200",
    owner: { firstName: "My Name3", lastName: "My LastName3" },
    ownerLocation: {
      longitude: "12345",
      latitude: "67890",
    },
  },
];

const DealerShipPage = () => {
  const [showModel, setShowModel] = useState(false);
  const [ownerName, setOwnerName] = useState({});
  const [dealer, setDealer] = useState({});
  const [ownerLocation, setOwnerLocation] = useState({});
  const [dealersList, setdealerList] = useState([]);
  const [dataToshow, setDataToShow] = useState([]);
  const [isEdit, setIEdit] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [searchStr, setSearchStr] = useState("");

  const modelHandeler = () => {
    setShowModel(showModel === false ? true : false);
  };

  const searchHandler = () => {
    if (searchStr.length > 0) {
      const data = dealersList.filter((item) =>
        item.name.toLowerCase().includes(searchStr.toLowerCase())
      );
      setdealerList(data);
    } else {
      setdealerList(dataToshow);
    }
  };

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/cars");
  };

  const addDealer = () => {
    const dealerDetails = {
      id: new Date().getTime().toString(),
      name: dealer.name,
      totalBudget: dealer.totalBudget,
      remainingBudget: dealer.remainingBudget,
      owner: { firstName: ownerName.firstName, lastName: ownerName.lastName },
      ownerLocation: {
        longitude: ownerLocation.longitude,
        latitude: ownerLocation.latitude,
      },
    };

    if (
      !dealerDetails.name ||
      !dealerDetails.totalBudget ||
      !dealerDetails.remainingBudget ||
      !dealerDetails.owner.firstName ||
      !dealerDetails.owner.lastName ||
      !dealerDetails.ownerLocation.longitude ||
      !dealerDetails.ownerLocation.latitude
    ) {
      alert("Please, fill all fields!!");
    } else if (isEdit && editItem) {
      const editDealerDetails = {
        id: new Date().getTime().toString(),
        name: dealer.name,
        totalBudget: dealer.totalBudget,
        remainingBudget: dealer.remainingBudget,
        owner: { firstName: ownerName.firstName, lastName: ownerName.lastName },
        ownerLocation: {
          longitude: ownerLocation.longitude,
          latitude: ownerLocation.latitude,
        },
      };
      const editedArr = dealersList.map((item) =>
        item.id === editItem ? { ...editDealerDetails } : item
      );
      setdealerList(editedArr);
      setShowModel(false);
      setEditItem(null);
      setOwnerName({});
      setDealer({});
      setOwnerLocation({});
      setEditItem(false);
    } else {
      setdealerList([...dealersList, dealerDetails]);
      setDataToShow([...dealersList, dealerDetails]);
      setShowModel(false);
      setOwnerName({});
      setDealer({});
      setOwnerLocation({});
    }
  };

  const deleteDealer = (id) => {
    const updatedDealerList = dealersList.filter((item) => {
      return id !== item.id;
    });
    setdealerList(updatedDealerList);
  };

  // Edit Dealer

  const editDealer = (id) => {
    setIEdit(true);
    const editItem = dealersList.find((item) => {
      return item.id === id;
    });

    setShowModel(true);

    setEditItem(editItem.id);

    setDealer({
      ...dealer,
      name: editItem.name,
      totalBudget: editItem.totalBudget,
      remainingBudget: editItem.remainingBudget,
    });

    setOwnerName({
      ...ownerName,
      firstName: editItem.owner.firstName,
      lastName: editItem.owner.lastName,
    });

    setOwnerLocation({
      ...ownerLocation,
      longitude: editItem.ownerLocation.longitude,
      latitude: editItem.ownerLocation.latitude,
    });
  };
  useEffect(() => {
    searchHandler();
  }, [searchStr]);

  useEffect(() => {
    setDataToShow(dealersListArr);
    setdealerList(dealersListArr);
  }, []);

  return (
    <div className="p-relative">
      <h2 className="heading-txt">Dealership</h2>
      <div className="d-flex justify-content-around">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                title="Search"
                value={searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
                autoFocus
              />
            </form>
          </div>
        </nav>
        <div>
          <Button
            title="Add Dealer"
            variant="contained"
            k
            size="small"
            startIcon={<AddIcon />}
            onClick={modelHandeler}
            className="btn btn-primary mr-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@fat"
          >
            Add Dealer
          </Button>
        </div>
      </div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Amount Of Cars</th>
            <th scope="col">Total Budget</th>
            <th scope="col">Remaining Budget</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {dealersList.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>Thornton</td>
                  <td>${item?.totalBudget}</td>
                  <td>${item?.remainingBudget}</td>
                  <td>
                    <Button
                      className="mr-2"
                      onClick={() => navigateHandler(item)}
                      title="View"
                      variant="contained"
                      startIcon={<RemoveRedEyeIcon />}
                    >
                      View
                    </Button>
                    <Button
                      className="mr-2"
                      title="Edit"
                      onClick={() => editDealer(item?.id)}
                      variant="contained"
                      startIcon={<EditIcon />}
                      color="success"
                    >
                      Edit
                    </Button>
                    <Button
                      title="Delete"
                      onClick={() => deleteDealer(item?.id)}
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      color="error"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div className="p-absolute">
        <DealerModel
          showModel={showModel}
          setShowModel={setShowModel}
          modelHandeler={modelHandeler}
          dealer={dealer}
          setDealer={setDealer}
          dealersList={dealersList}
          setdealerList={setdealerList}
          addDealer={addDealer}
          ownerName={ownerName}
          setOwnerName={setOwnerName}
          ownerLocation={ownerLocation}
          setOwnerLocation={setOwnerLocation}
        />
      </div>
    </div>
  );
};

export default DealerShipPage;
