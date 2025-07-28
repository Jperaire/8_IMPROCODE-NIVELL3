import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import { categories } from "../../../utils/chartFormat";

export const NewEventForm = () => {
    const [nom, setNom] = useState("");
    const [categoria, setCategoria] = useState("");
    const [lat, setLat] = useState<number | string>("");
    const [lng, setLng] = useState<number | string>("");
    const [visitas, setVisitas] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nom || !categoria || !lat || !lng || !visitas) {
            alert("Por favor completa todos los campos.");
            return;
        }

        try {
            await addDoc(collection(db, "lugares"), {
                nom,
                categoria,
                lat: Number(lat),
                lng: Number(lng),
                visitas,
            });

            setNom("");
            setCategoria("");
            setLat("");
            setLng("");
            setVisitas("");
        } catch (e) {
            console.error("Error al agregar documento:", e);
        }
    };

    return (
        <div>
            <h2>Crear Lugar</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />

                <select
                    name="categories"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Selecciona una categoría</option>
                    {categories.map((cat, index) => (
                        <option value={cat} key={index}>
                            {cat}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Latitud"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Longitud"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Fecha Visita"
                    value={visitas}
                    onChange={(e) => setVisitas(e.target.value)}
                />
                <button type="submit">Agregar Lugar</button>
            </form>
        </div>
    );
};
