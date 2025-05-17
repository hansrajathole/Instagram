import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false);
      setIsLoginModalOpen(true); // Open login modal
    } else {
      setIsAuthenticated(true);
    }
  }, [token]);

  const handleLogin = () => {
    setIsLoginModalOpen(false);
    navigate("/login");
  };


  // const handleClose = () => {
  //   setIsLoginModalOpen(false);
  //   navigate("/");
  // }
  if (isAuthenticated) {
    return children;
  }



  return (
    <Dialog open={isLoginModalOpen} >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login Required</DialogTitle>
          <DialogDescription>
            You must be logged in to access this page. Please login to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4">
          <Button onClick={handleLogin}>Go to Login</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Protected;
