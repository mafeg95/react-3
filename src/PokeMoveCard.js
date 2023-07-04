import "./PokeMoveCard.css";

const PokeMoveCard = (props) => {
    const { id, level, move, type } = props;
    return (
        <li className="poke-move-card">
            <h3>Move {id}</h3>
            <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
            <p>Type: {type}</p>
            <p>Level: {level}</p>
        </li>
    );
};

export default PokeMoveCard;