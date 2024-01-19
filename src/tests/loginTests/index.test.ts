jest.useRealTimers();


describe("testing validation login", () => {
  test("should respond with true", async () => {
    const LoginValidation = () => {
      const emailList = ['testing@gmail.com'];
      const passwordList = [822112321];
    
      if(emailList.length && passwordList.length > 0) return true;
    
      return false;
    }

    expect(LoginValidation()).toBe(true);

  }, 1000);

  test("should respond with false", async () => {
    const LoginValidation = () => {
      const emailList = [];
      const passwordList = [0];
    
      if(emailList.length && passwordList.length > 0) return true;
    
      return false;
    }

    expect(LoginValidation()).toBe(false);

  }, 1000);

});