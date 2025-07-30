import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import { categories } from "../../../utils/chartFormat";
import styles from "./NewEventForm.module.css";

export const NewEventForm = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [lat, setLat] = useState<number | string>("");
    const [lng, setLng] = useState<number | string>("");
    const [visitDate, setVisitDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !category || !lat || !lng || !visitDate) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await addDoc(collection(db, "places"), {
                name,
                category,
                lat: Number(lat),
                lng: Number(lng),
                visitDate,
            });

            setName("");
            setCategory("");
            setLat("");
            setLng("");
            setVisitDate("");
        } catch (e) {
            console.error("Error adding document:", e);
        }
    };

    return (
        <>
            <h2>ADD EVENT FORM</h2>

            <form onSubmit={handleSubmit} className={styles.container}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                />
                <select
                    name="categories"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Choose a category</option>
                    {categories.map((cat, index) => (
                        <option value={cat} key={index}>
                            {cat}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    placeholder="Latitude"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="number"
                    placeholder="Longitude"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className={styles.date}
                />
                <button type="submit" className={styles.button}>
                    SEND
                </button>
            </form>
        </>
    );
};
