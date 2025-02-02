import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "./Sidebar";
import ProgressBar from "./ProgressBar";
import CalendarComponent from "./Calendar";
import WeeklyChart from "./WeeklyChart";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold">
          Welcome back <span className="text-green-600">Sarra!</span>
        </h2>
        <p className="text-gray-600">You have completed 75% of your daily goal!</p>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent>
              <p className="font-bold">Daily Goal</p>
              <ProgressBar value={75} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-bold">Course Progress</p>
              <ProgressBar value={60} className="mb-2" />
              <ProgressBar value={40} className="mb-2" />
              <ProgressBar value={70} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-bold">October 2024</p>
              <CalendarComponent />
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold">Weekly Overview</h3>
          <WeeklyChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
