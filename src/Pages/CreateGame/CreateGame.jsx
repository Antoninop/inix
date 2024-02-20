import { useParams } from 'react-router-dom';

function CreateGame() {
  const { gameId } = useParams();

  return (
    <div>
      <h1>Game id : {gameId} </h1>
    </div>
  );
}

export default CreateGame;
