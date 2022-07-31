import CardSection from "@components/card-section";
import type { StatusType } from "@models/status";

const statuses: StatusType[] = ["FOUND", "HANDLING", "RESOLVED", "HOLD"];

const HomePage = () => {
  return (
    <div className="p-3">
      <div className="grid gap-4 lg:grid-cols-4">
        {statuses.map((status) => (
          <CardSection key={status} status={status} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
