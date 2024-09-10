import React from 'react';

function ContactList({ contacts, handleDelete, handleEdit }) { 

  const dragHandler = (e, contact) => {
    e.dataTransfer.setData("contact", JSON.stringify(contact));
  };

  return (
    <>
      <div className='table-responsive-sm'>
          <p className='mt-4 p-0 fw-light'>Note: You can drag a contact to list.</p>
        <table className='table table-striped'>
          <thead>
  
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Role</th>
              <th>Date Added</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((item) => (
                <tr
                  onDragStart={(e) => dragHandler(e, item)} 
                  draggable
                >
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td>{item.role}</td>
                  <td>{item.dateAdded}</td>
                  <td>
                    <div className='d-flex justify-content-around'>
                      <button className='btn' onClick={() => handleEdit(item)}> 
                        <i className="fa-solid fa-pencil fa-lg" style={{ color: "#00264d" }} />
                      </button>
                      <button className='btn' onClick={() => handleDelete(item.id)}> 
                        <i className="fa-regular fa-trash-can fa-lg" style={{ color: "#800000" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className='text-center'>No contacts found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ContactList;
