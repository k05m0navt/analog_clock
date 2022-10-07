import AnalogueClock from "react-analogue-clock";

type Props = {};

const AnalogClock = (props: Props) => {
  const clockOptions = {
    baseColor: "#ffffff",
    borderColor: "#1E293B",
    borderWidth: 5,
    centerColor: "#1E293B",
    handColors: {
      hour: "#1E293B",
      minute: "#1E293B",
      second: "#1E293B",
    },
    notchColor: "#1E293B",
    numbersColor: "#1E293B",
    showNumbers: true,
    size: 500,
  };

  return <AnalogueClock {...clockOptions} />;
};

export default AnalogClock;
