import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    data: ChartData<"pie", number[], unknown>;
}

export const PieChart = ({ data }: PieChartProps) => {
    return (
        <article>
            <h2>PIE CHART</h2>
            <Pie data={data} />
        </article>
    );
};
