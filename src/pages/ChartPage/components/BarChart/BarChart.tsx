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

interface BarChartProps {
    data: ChartData<"bar">;
}

export const BarChart = ({ data }: BarChartProps) => {
    return (
        <>
            <h2>BAR CHART</h2>
            <Bar data={data} />
        </>
    );
};
