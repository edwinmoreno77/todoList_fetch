import { PropTypes } from "prop-types";

export const Login = ({
  userSession,
  setUserSession,
  handleLogin,
  setAccount,
  account,
  handleCreateUser,
}) => {
  return (
    <section style={{ margin: "5px", padding: "5px" }}>
      <div>
        <input
          type="text"
          name="name"
          value={userSession.name}
          placeholder=""
          onChange={(e) =>
            setUserSession({ ...userSession, name: e.target.value })
          }
        />
        <button style={{ margin: "5px" }} onClick={handleLogin}>
          login
        </button>
      </div>
      <div>
        <input
          type="text"
          name="user"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <button style={{ margin: "5px" }} onClick={handleCreateUser}>
          create account
        </button>
      </div>
    </section>
  );
};

Login.propTypes = {
  userSession: PropTypes.object.isRequired,
  setUserSession: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  account: PropTypes.string.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
};
