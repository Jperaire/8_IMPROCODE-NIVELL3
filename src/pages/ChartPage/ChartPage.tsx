import { useContext } from "react";
import { UbicacionsContext } from "../../context/UbicacionsContext";
import { BarChart, PieChart } from "./components";
import { chartFormat } from "../../utils/chartFormat";
import { ChartData } from "chart.js";

export const ChartPage = () => {
    const context = useContext(UbicacionsContext);

    if (!context || context.loading) {
        return <p>Loading...</p>;
    }

    const { ubicacions } = context;

    const barChartFormat = chartFormat(ubicacions, "bar") as ChartData<"bar">;
    const pieChartFormat = chartFormat(ubicacions, "pie") as ChartData<"pie">;

    if (!barChartFormat || !pieChartFormat) {
        return <p>Error generating charts</p>;
    }

    return (
        <>
            <BarChart data={barChartFormat} />
            <PieChart data={pieChartFormat} />
        </>
    );
};
