import axios from "axios";
import { Form } from "./form";

export function ConnectedForm() {
  const handleSubmit = async (email: string, password: string) => {
    // await axios.post("https://localhost:3000/login", {
    //   email,
    //   password,
    // });
    console.log(email, password);
  };
  return <Form onSubmit={handleSubmit} />;
}
