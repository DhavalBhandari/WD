import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleDel = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <Link to="/adduser">
        <Button variant="contained" className="primary">
          Add User
        </Button>
      </Link>
      <TableContainer component={Paper} sx={{ marginTop: 8, minWidth: 900 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.contact}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      alignItems: "center",
                      "& > *": {
                        m: 1,
                      },
                    }}
                  >
                    <ButtonGroup
                      variant="outlined"
                      aria-label="Basic button group"
                    >
                      <Link to={`/edituser/${user.id}`}>
                        <Button
                          style={{
                            marginLeft: "10px",
                            borderRight: "1px solid",
                            backgroundColor: "blue",
                            color: "white",
                          }}
                        >
                          EDIT
                        </Button>
                      </Link>
                      <Button
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "red",
                          color: "white",
                        }}
                        onClick={() => handleDel(user.id)}
                      >
                        DELETE
                      </Button>
                    </ButtonGroup>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
