import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Profile Photo */}
        <label htmlFor="profilePhoto" style={styles.avatarContainer}>
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile"
              style={styles.avatarImage}
            />
          ) : (
            <div style={styles.avatar}>U</div>
          )}

          {isEditing && (
            <div style={styles.cameraButton}>
              📷
            </div>
          )}
        </label>

        {isEditing && (
          <input
            id="profilePhoto"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
        )}

        <h1 style={styles.heading}>My Profile</h1>

        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />

            <button
              style={styles.button}
              onClick={() => setIsEditing(false)}
            >
              Save Profile
            </button>
          </div>
        ) : (
          <>
            <div style={styles.info}>
              <div style={styles.infoRow}>
                <span style={styles.label}>Name</span>
                <span style={styles.value}>User</span>
              </div>

              <div style={styles.infoRow}>
                <span style={styles.label}>Email</span>
                <span style={styles.value}>
                  user@example.com
                </span>
              </div>
            </div>

            <button
              style={styles.button}
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f8fafc",
    padding: "2rem",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#ffffff",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    border: "1px solid #e2e8f0",
  },

  avatarContainer: {
    position: "relative",
    display: "block",
    width: "90px",
    height: "90px",
    margin: "0 auto 1rem",
    cursor: "pointer",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "#00b878",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.2rem",
    fontWeight: "700",
  },

  avatarImage: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
  },

  cameraButton: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#000000",
    border: "3px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },

  heading: {
    margin: "0 0 1.8rem",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
  },

  info: {
    textAlign: "left",
    marginBottom: "2rem",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 0",
    borderBottom: "1px solid #e2e8f0",
  },

  label: {
    fontWeight: "600",
    color: "#64748b",
  },

  value: {
    color: "#1e293b",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.85rem",
    marginBottom: "1rem",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "0.85rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#00d878",
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Profile;