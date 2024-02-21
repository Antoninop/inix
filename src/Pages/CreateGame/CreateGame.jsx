import { useState } from 'react';
import { useParams } from 'react-router-dom';
import UsernameInputPage from '../../Components/UsernameInputPage/UsernameInputPage';

function CreateGame() {
  const { gameId } = useParams();
  const [username, setUsername] = useState(null); 

  return (
    <div>
      {!username ? (
        <UsernameInputPage setUsername={setUsername} />
      ) : (

        <div>
          <h1>Game id : {gameId}</h1>
          <h2>Username : {username}</h2>
        </div>
      )}
    </div>
  );
}

export default CreateGame;
