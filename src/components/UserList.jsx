import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/actions/contactAction';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

function UserList({ data }) {
  const dispatch = useDispatch();
  const handleClickUserDelete = (id) => {
    alertify.confirm('Warning!', 'Are you sure you want to delete the contact information?', () => { alertify.error('Contact information deleted.'); dispatch(deleteContact(id)); },
      () => { alertify.success('Contact information was not deleted.'); });
  };

  return (
    <Table responsive striped hover className="text-center lh-lg">
      <thead className="text-white bg-opacity-75 bg-primary bg-gradient ">
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Birthday</th>
        <th>Address</th>
        <th> </th>
      </thead>
      <tbody>
        {
          data.map((user) => (
            <tr key={user.id} className="my-auto">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthday}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/EditUser/${user.id}`}>
                  <i className="fa fa-pencil text-success mx-2 fs-4 btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" />
                </Link>
                <i className="fa fa-trash text-danger mx-2 fs-4 btn " data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={() => handleClickUserDelete(user.id)} />
                <i className="fa fa-clock-o text-info mx-2 fs-4 btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Call Later" />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default UserList;
