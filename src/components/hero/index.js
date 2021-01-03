import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../buttons/buttonElements'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroElements'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Casual-Vibes Shopping Made Easy</HeroH1>
                <HeroP>Finding ways to serve your shopping needs</HeroP>
                <HeroBtnWrapper>
                    <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Order Now {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
