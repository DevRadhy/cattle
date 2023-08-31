import User from "../../entities/User";

type Override = Partial<User>;

export default function UserFactory(override?: Override) {
  return new User({
    name: "John Doe",
    email: "john.doe@mail.com",
    password: "1234",
    ...override,
  }, override?.id);
}