import Button from "../../organisms/Button.tsx";
import UploadDialog from "./UploadDialog.tsx";
import { useEffect, useState } from "react";
import { useSidebar } from "./Dashboard.element.ts";
import axios, { AxiosRequestConfig } from "axios";
import apiEndpoints from "../../../constants/apiEndpoints.ts";
import Slide from "../../organisms/Slide.tsx";

export default function DashboardPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { navigationButton } = useSidebar();

  const fetchSlides = async (userId: string) => {
    const baseUrl = apiEndpoints.slide;
    const apiKey = process.env.REACT_APP_API_KEY;
    const body = {
      userId: userId,
    };
    try {
      const config: AxiosRequestConfig = {
        method: "get",
        url: `${baseUrl}/getallslides`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        data: body,
      };
      const res = axios.request(config);
      console.log(res);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user")!).user_id;
    const slides = fetchSlides(userId);
  }, []);

  return (
    <>
      <div className="top px-8 py-8">
        <div className="top-nav flex items-center justify-between">
          {navigationButton}
          <h1>Dashboard</h1>
          <Button
            variant="primary"
            styleHolder="w-max"
            onClick={() => setIsDialogOpen(!isDialogOpen)}
          >
            + New Slide
          </Button>
        </div>
      </div>
      <div className="content px-8 py-8">
        <Slide />
      </div>
      <UploadDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
}
