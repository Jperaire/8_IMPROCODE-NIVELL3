import { useContext } from "react";
import { UbicacionsContext } from "../../context/UbicacionsContext";
import { BarChart, PieChart } from "./components";
import { chartFormat } from "../../utils/chartFormat";

export const ChartPage = () => {
    const context = useContext(UbicacionsContext);

    if (!context || context.loading) {
        return <p>Loading...</p>;
    }

    const { ubicacions } = context;

    const barChartFormat = chartFormat(ubicacions, "bar");
    const pieChartFormat = chartFormat(ubicacions, "pie");

    if (!barChartFormat || !pieChartFormat) {
        return <p>Error generating charts</p>;
    }

    return (
        <>
            <BarChart chartData={barChartFormat} />
            <PieChart chartData={pieChartFormat} />
        </>
    );
};
