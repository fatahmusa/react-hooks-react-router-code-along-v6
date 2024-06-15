function Login(){
    return(
        <>
        <header>


        </header>
        <main>
        <h1>Login</h1>
        <form>
        <div>
        <label for= "username">Username: </label>
        <input id="username" name= "username" type="text" placeholder="username" ></input>
        </div>
        <br/>
          <div>
            <label for="password">Password: </label>
            <input id="password" type="password" name="password" placeholder="Password" />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default Login;