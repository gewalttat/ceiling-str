import { Container, Typography } from '@mui/material';
import './Light.scss';
import light1 from '../../../images/light1.jpg';
import light2 from '../../../images/light2.jpg';
import light3 from '../../../images/light3.jpg';
import light5 from '../../../images/light5.jpg';
import { useState } from 'react';

export const Light = () => {
  const images = [light1, light2, light3, light5];

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (imgSrc: any) => {
    setFullscreenImage(imgSrc);
    document.body.style.overflow = 'hidden'; // блокируем скролл страницы при открытии
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = ''; // разблокируем скролл страницы при закрытии
  };

  return (
    <Container className="lighting-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Наша команда готова воплотить в жизнь ваши самые смелые идеи в области освещения.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Мы специализируемся как на создании уютной атмосферы в домах, так и на обеспечении освещения в крупных производственных помещениях.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Наши эксперты по расчёту освещённости разработают для вас профессиональный проект, учитывающий все особенности вашего объекта. А мастер подбора составит смету на основе вашего проекта и технического задания.
      </Typography>

      <div className='polaroid-container'>
        {images.map((img, index) => <img src={img} alt='ceiling' className='light-image' onClick={() => openFullscreen(img)}/>)}
      </div>

      {fullscreenImage && (
        <div className="fullscreen">
          <img src={fullscreenImage} alt='fullscreen' onClick={closeFullscreen} />
        </div>
      )}

      <Typography variant="h6" component="h2" gutterBottom>
        Наше призвание — решение сложных задач. С нами будет ярко!
      </Typography>
    </Container>
  );
}