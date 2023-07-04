import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard";

const Moves = () => {
    return (
        <>
            <h1>Moves</h1>
            <ul>
                {moves.map((item, i) => (
                    <PokeMoveCard key={item.id} {...item} />
                ))}
            </ul>
        </>
    );
};

export default Moves;