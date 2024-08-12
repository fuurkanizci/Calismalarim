import PropTypes from "prop-types";
function User({ isLoggedIn, name, surname, age, friends }) {
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapılamadı"}</h1>
      {friends.map((friend, index) => (
        <div key={index}>
          {index} ) {friend}
        </div>
      ))}
    </>
  );
}


User.propTypes={
    name: PropTypes.string,
    surname: PropTypes.string,
};
export default User;
