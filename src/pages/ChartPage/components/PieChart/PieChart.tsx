import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ChartData } from "../../../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = (chartData: ChartData) => {
    return (
        <>
            <h2>Pie Chart</h2>
            <Pie data={chartData} />
        </>
    );
};
