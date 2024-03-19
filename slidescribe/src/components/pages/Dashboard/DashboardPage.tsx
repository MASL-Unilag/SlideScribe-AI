import Button from "../../organisms/Button.tsx";
import UploadDialog from "./UploadDialog.tsx";
import { useEffect, useState } from "react";
import { useSidebar } from "./Dashboard.element.ts";
import axios, { AxiosRequestConfig } from "axios";
import apiEndpoints from "../../../constants/apiEndpoints.ts";
import Slide, { SlideProps } from "../../organisms/Slide.tsx";

export default function DashboardPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { navigationButton } = useSidebar();
  const slides = [
    {
      title: "Introduction to health and safety maintenance",
      date: "2024-01-16T15:25:50.823Z",
      url: "https://scribeslides.blob.core.windows.net/scribecontainer/Adobe%20Photoshop%20Tutorial.pptx",
    },
    {
      title:
        "Exploring the Neurological Mechanisms of Creativity: Unveiling the Mind's Artistry",
      date: "2024-03-19T10:27:53.518Z",
      url: "https://scribeslides.blob.core.windows.net/scribecontainer/Exploring%20the%20Neurological%20Mechanisms%20of%20Creativity%3A%20Unveiling%20the%20Mind%27s%20Artistry.pptx",
    },
    {
      title:
        "Sustainable Urban Agriculture: Cultivating Green Cities for Future Generations",
      date: "2024-03-19T10:34:24.870Z",
      url: "https://scribeslides.blob.core.windows.net/scribecontainer/Sustainable%20Urban%20Agriculture%3A%20Cultivating%20Green%20Cities%20for%20Future%20Generations.pptx",
    },
    {
      title: "Quantum Computing",
      date: "2024-03-19T10:38:31.311Z",
      url: "https://scribeslides.blob.core.windows.net/scribecontainer/Quantum%20Computing.pptx",
    },
    {
      title:
        "Resilience in the Face of Adversity: Building Mental Strength for Personal Growth",
      date: "2024-03-19T10:41:12.610Z",
      url: "https://scribeslides.blob.core.windows.net/scribecontainer/Resilience%20in%20the%20Face%20of%20Adversity%3A%20Building%20Mental%20Strength%20for%20Personal%20Growth.pptx",
    },
    {
      title:
        "The Evolution of E-Commerce: Transforming Retail in the Digital Age",
      date: "2024-03-19T10:41:12.610Z",
      url: "https://scribeslides.blob.core.windows.net/scribecontainer/The%20Evolution%20of%20E-Commerce%3A%20Transforming%20Retail%20in%20the%20Digital%20Age.pptx",
    },
  ];
  const [slidesInfo, setSlideInfo] = useState<SlideProps[]>(slides);

  const fetchSlides = async (userId: string) => {
    try {
      const baseUrl = apiEndpoints.slide;

      const apiKey = JSON.parse(localStorage.getItem("token")!).accessToken;

      const config: AxiosRequestConfig = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${baseUrl}`,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.request(config);
      console.log(res);
      return res.data();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    // const userId = JSON.parse(localStorage.getItem("user")!).user_id;
    // const slides = fetchSlides(userId);
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
        <h3 className="font-medium text-2xl mb-3 text-neutral-700">Recents</h3>
        <div className="flex flex-wrap gap-8">
          {slidesInfo.map((slides: SlideProps) => (
            <Slide slideInfo={slides} key={slides.url} />
          ))}
        </div>
      </div>
      <UploadDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
}
