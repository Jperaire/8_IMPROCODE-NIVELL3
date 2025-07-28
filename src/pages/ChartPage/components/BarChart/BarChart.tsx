import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = ({ chartData }: ChartData) => {
    return (
        <>
            <h2>Bar Chart</h2>
            <Bar data={chartData} />
        </>
    );
};
