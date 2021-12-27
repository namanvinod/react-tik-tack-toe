export default login = () => {
    return (
        <div className="login-container">
            <label for="userName">User Name</label>
            <input type="text" />
            <label for="password">Password</label>
            <input type="text" />
            <button>
                Login
            </button>
            <button>
                Register
            </button>

        </div>
    );
};