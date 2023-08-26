import axios from "axios";
import React, { useState } from "react";
import { SearchInput } from "../LSP/searchInput";
import { useStateManager } from "../LSP/hooks/useStateManager";

interface IFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function Form(props: IFormProps) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const {stateValue: email, handleState: handleEmail} = useStateManager<string>("");
  const {stateValue: password, handleState : handlePassword} = useStateManager<string>("");
  const { onSubmit } = props;

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   await axios.post("https://localhost:3000/login", {
  //     email,
  //     password,
  //   });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <section>
            <h1>
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleEmail(e.target.value)}
                  id="email"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                >
                  Password
                </label>
                {/* <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="••••••••"
                /> */}
                <SearchInput value={password} onChange={(e) => handlePassword(e.target.value)}/>
              </div>
              <button
                type="submit">
                Sign in
              </button>
            </form>
    </section>
  );
}
