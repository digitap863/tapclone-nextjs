"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/admin/login", user);
      if (response?.data?.success) {
        toast.success("Login successful");
        router.push("/admin/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user.email, user.password]);
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-2">
      <h1 className="p-5 text-4xl font-bold font-mono ">
        {loading ? "processing" : "Admin login"}
      </h1>
      <form onSubmit={onLogin} className="text-black">
        <div className="flex flex-col">
          <Input
            className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
        </div>
        <div className="flex flex-col">
          <Input
            className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none focus:border-gray-600"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
        </div>
        <Button type="submit" disabled={buttonDisabled} className="">
          {buttonDisabled ? "login" : "login"}
        </Button>
      </form>
      <Toaster />
      {/* <span className="p-5">
        <p>
          if not account please{" "}
          <Link
            href="/signup"
            className="text-blue-400 hover:text-blue-600 p-1"
          >
            Signup
          </Link>
        </p>
      </span> */}
    </div>
  );
};

export default LoginPage;
