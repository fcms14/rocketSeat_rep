const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../respositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => { 
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepository);
    });

    it("user should be created", async () => {
        const user = {
            name: "User Test",
            email: "teste@teste.com",
            password: "123"
        };
    
        const userCreated = await userCreateService.execute(user);
    
        expect(userCreated).toHaveProperty("id");
    });

    it("user should not create with duplicated email", async () => {
        const user1 = {
            name: "User Test 1",
            email: "teste@teste.com",
            password: "123"
        };
        const user2 = {
            name: "User Test 2",
            email: "teste@teste.com",
            password: "456"
        };
    
        await userCreateService.execute(user1);

        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."));    
    })
})
