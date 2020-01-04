import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad eaque, eius fugiat fugit harum hic in laboriosam modi non possimus quia quibusdam quisquam saepe sequi similique tempora velit voluptatibus!</p>
      <button
        className="btn"
        onClick={() => history.push('/')}
      >Обратно к списку дел</button>
    </div>
  )
};