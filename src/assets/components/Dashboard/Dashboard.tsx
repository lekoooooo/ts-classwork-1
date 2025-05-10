import Button from "../Button/Button";

const Dashboard = () => {
  const handleClick = (msg: string) => () => alert(msg);

  return (
    <div className="space-y-4 p-6">
      <Button onClick={handleClick("Primary clicked")}>Primary</Button>
      <Button className="bg-green-500" onClick={handleClick("Success clicked")}>
        Success
      </Button>
      <Button disabled onClick={handleClick("This should not show")}>
        Disabled
      </Button>
    </div>
  );
};

export default Dashboard;
