import { SectionDiv } from "../Div/SectionDiv";

export const HeroMain = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center z-10 relative text-white/90">
      <SectionDiv>
        <div className="flex flex-col gap-y-10">
          <h1 className="text-7xl font-semibold max-w-4xl text-center leading-none mx-auto">
            Build beautiful Websites stores with Framer!
          </h1>
          <p className="text-center text-xl font-medium max-w-3xl mx-auto text-white/50">
            Design and publish your
            <span className="text-white/90"> Websites</span>, manage it with
            <span className="text-white/90"> Framer</span>.
          </p>
        </div>
      </SectionDiv>
    </div>
  );
};
