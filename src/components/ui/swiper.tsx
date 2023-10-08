import React, { useEffect, useRef, useState } from 'react';

// Ваши изображения
import image1 from '../../images/main/html5.svg';
import image4 from '../../images/main/3.png';
import image3 from '../../images/main/4.png';

const images: string[] = [image1, image4, image3,image1, image4, image3,image1, image4, image3,image1, image4, image3,image1, image4, image3,image1, image4, image3];

const Carousel: React.FC = () => {
    const totalImages = images.length;
    const animationDuration = totalImages * 5;  // Длительность анимации; умножаем на 5 секунд для каждого изображения

    return (
        <div style={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '100%',  // Высоту можно настроить по вашему усмотрению
        }}>
            <div style={{
                display: 'flex',
                animation: `scroll ${animationDuration}s linear infinite`,
            }}>
                {images.map((image, index) => (
                    <div key={index} style={{ flexShrink: 0, width: '10%',height: '100%' }}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{objectFit: 'cover' }} />
                    </div>
                ))}
                {/* Дублирование изображений для бесконечного эффекта */}
                {images.map((image, index) => (
                    <div key={index + totalImages} style={{ flexShrink: 0, width: '10%', height: '100%' }}>
                        <img src={image} alt={`Slide ${index + 1 + totalImages}`} style={{objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;







