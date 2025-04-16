const Conditional = ({ score = 0 }) => {
  return <>{score > 0 ? Goal(score) : NoGoal()}</>;
};
const Goal = (score) => {
  return <> Current score: {score}</>;
};
const NoGoal = () => {
  return <>No Goal Yet;</>;
};
export default Conditional;
