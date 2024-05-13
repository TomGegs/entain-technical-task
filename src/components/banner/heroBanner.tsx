import Autoplay from 'embla-carousel-autoplay';

import { Carousel, CarouselContent, CarouselItem } from '../common/ui/carousel';

import homePage1 from '../../assets/images/homepage/HOM.jpg';
import homePage2 from '../../assets/images/homepage/HOM2.jpg';
import homePage3 from '../../assets/images/homepage/HOM3.jpg';
import homePage4 from '../../assets/images/homepage/HOM4.jpg';

export function HeroBanner() {
    const images = [homePage1, homePage2, homePage3, homePage4];
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <img
                            className="flex justify-center object-cover "
                            src={image}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
