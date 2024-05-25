import Banner from "@/components/banner/Banner";
import SignButtons from "@/components/navbar/SignButtons";

export default function Home() {
  return (
    <>
      <div className="sm:hidden">
        <SignButtons />
      </div>
      <Banner />
    </>
  );
}
