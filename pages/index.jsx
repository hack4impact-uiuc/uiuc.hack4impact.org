import React from "react";
import Banner from "../components/homepage/banner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/homepage/involveSection";
import ClientSlider from "../components/homepage/clientSlider";
import PartnerSection from "../components/homepage/partnerSection";
import OtherChapters from "../components/homepage/otherChapters";
import { ToastContainer } from "react-toastify";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head title="Hack4Impact UIUC" />
      <Nav navType="mainNav" />
      <ToastContainer />
      <Banner />
      <OurWorkSection />
      <ClientSlider />
      <InvolveSection />
      <PartnerSection />
      <OtherChapters />
      <Footer />
    </div>
  );
}
