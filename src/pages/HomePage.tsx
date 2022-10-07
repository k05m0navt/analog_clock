import { AnalogClock } from "../components";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="h-screen flex flex-col bg-slate-800 items-center justify-center space-y-6">
      <p className="text-4xl text-white">Moscow time</p>
      <AnalogClock />
    </div>
  );
};

export default HomePage;
