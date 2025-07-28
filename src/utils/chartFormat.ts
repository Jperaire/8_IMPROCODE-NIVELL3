import { Ubicacions } from "../types";
import { ChartData } from "chart.js";

type ChartType = "bar" | "pie";

export const chartFormat = (
    ubicacions: Ubicacions[],
    type: ChartType
): ChartData | null => {
    const categories = [
        "Parc",
        "Museu",
        "Iglesia",
        "Teatre",
        "Edifici Modernista",
        "Castell",
    ];

    const conteoUbicacions = categories.map(
        (categoria) =>
            ubicacions.filter((u) => u.categoria === categoria).length
    );

    const backgroundColor = [
        "#FFB3B3",
        "#B3FFB3",
        "#B3B3FF",
        "#FFFFB3",
        "#D1A7FF",
        "#FFB366",
    ];

    const borderColor = [
        "#ff8a8a",
        "#7cfe7c",
        "#7b7bfc",
        "#acac5d",
        "#ac64f9",
        "#b9824b",
    ];

    const dataset = {
        label: "Categories",
        data: conteoUbicacions,
        backgroundColor,
        borderWidth: 1,
        borderColor,
    };

    const chartData = {
        labels: categories,
        datasets: [dataset],
    };

    const chartType = type.toLowerCase();

    if (chartType === "bar") {
        return {
            ...chartData,
            datasets: [dataset],
        };
    } else if (chartType === "pie") {
        return {
            ...chartData,
            datasets: [
                {
                    ...dataset,
                    hoverOffset: 4,
                },
            ],
        };
    }

    return null;
};
