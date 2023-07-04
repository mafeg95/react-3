import { moves } from "./data.js";

const Moves = () => {
    return (
        <>
            <h1>Moves</h1>
            <ul>
                {moves.map((item, i) => (
                    <li key={i}>
                        {item.id}. {item.move}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Moves;