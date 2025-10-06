import React ,{ useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";
const Users = () => {
  const [users, setusers] = useState([]);
  const [auth, setAuth] = useAuth();
  const getusers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/users");
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getusers();
  }, [auth?.token]);
  return (
    <Layout title={"All user Data"}>
    <div className="row dashboard">
      <div className="col-md-3">
        <AdminMenu />
      </div>
      <div className="col-md-9">
      <h1 className="text-center">All users</h1>
      <div className="border shadow">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">User Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.address}</td>
                <td>{user?.phone}</td>
                <td>{user?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </Layout>
);
};

export default Users;