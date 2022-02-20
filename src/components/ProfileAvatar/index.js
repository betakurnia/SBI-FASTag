import React from "react";

const ProfileAvatar = () => {
  return (
    <div className="col-lg-3 my-auto">
      <div className="d-flex flex-column align-items-center text-center mb-3">
        <img
          src="assets/images/users/avatar6.png"
          alt="Admin"
          className="rounded-circle p-1 bg-primary"
          width={150}
        />
        <div className="mt-3">
          <button
            className="btn btn-primary btn-rounded"
            data-bs-toggle="modal"
            data-bs-target="#uploadImage"
          >
            Change Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
