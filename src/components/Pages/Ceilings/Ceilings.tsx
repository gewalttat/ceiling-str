import { Typography, Container } from '@mui/material';
import './Ceilings.scss'
import { useState } from 'react';
import light4 from '../../../images/light4.jpg';
import light6 from '../../../images/light6.jpg';
import light7 from '../../../images/light7.jpg';
import light8 from '../../../images/light8.jpg';

export const Ceilings = () => {
  const images = [light4, light6, light7, light8];

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
      Уже более пяти лет мы создаём натяжные потолки, удовлетворяя любые запросы наших заказчиков. В своей работе мы стремимся к совершенству и гармонии стиля.
      </Typography>
      <Typography variant="body1" gutterBottom>
      Наша команда профессионалов готова решать самые сложные задачи и брать на себя ответственность за результат.
      </Typography>
      <Typography variant="body1" gutterBottom>
      Мы работаем только с алюминиевыми профилями, что гарантирует наиболее качественное прилегание элементов потолка и надёжность конструкций.
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
      Мы уверены в качестве своей работы и предоставляем пожизненную гарантию на наши потолки.
      </Typography>
    </Container>
  )
};