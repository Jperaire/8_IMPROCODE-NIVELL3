import { useContext } from "react";
import { EventsContext } from "../../context/EventsContext";
import { BarChart, PieChart } from "./components";
import { chartFormat } from "../../utils/chartFormat";
import { ChartData } from "chart.js";
import styles from "./ChartPage.module.css";

export const ChartPage = () => {
    const context = useContext(EventsContext);

    if (!context || context.loading) {
        return <p>Loading...</p>;
    }

    const { events } = context;

    const barChartFormat = chartFormat(events, "bar") as ChartData<"bar">;
    const pieChartFormat = chartFormat(events, "pie") as ChartData<"pie">;

    if (!barChartFormat || !pieChartFormat) {
        return <p>Error generating charts</p>;
    }

    return (
        <section>
            <h2>
                EVENT DISTRIBUTION <br />
                BY CATEGORY
            </h2>

            <div className={`container ${styles.chartsContainer}`}>
                <div className={styles.chartContainer}>
                    <BarChart data={barChartFormat} />
                </div>
                <div className={styles.chartContainer}>
                    <PieChart data={pieChartFormat} />
                </div>
            </div>
        </section>
    );
};
