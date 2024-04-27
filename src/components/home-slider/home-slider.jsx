import React from 'react'
import './home-slider.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SLiderPhotoKg from '../../img/SliderPhotoKg.jpg'

function HomeSlider() {

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <img
                style={{
                    ...style,
                    display: 'block',
                    background: 'red',
                    cursor: 'pointer',
                    width: '60px',
                    height: '60px'
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <img
                style={{
                    ...style, display: 'inline',
                    position: 'absolute',
                    top: '305px',
                    left: '907px',
                    background: 'blue',
                    width: '60px',
                    height: '60px'
                }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='home-slider'>
            <Slider {...settings} className='slider'>
                {sliderImages.map((items) => (
                    <div key={items.id}>
                        <img src={items.img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HomeSlider

const sliderImages = [
    {
        img: SLiderPhotoKg,
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/c84d/4257/c028b3188f25669473fbe30fe69513e0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6xmQ6Z5bhyQDjEGbU0Qu~6gdWe4dlxb2gxF8aqsJFMYlxKUMPdycCLQK1DPkEL8I7ziyyVGqvMonBnmsPvFMj97jRCdpkcs9praBxdcCmBWsZK~KuupqNaovoloXbSn1t~NISIRZVMsfEG8KpTrPghKVXXD~VxcnyIJq53o-CKfdxwMmGvRMfKL~NthTH0YaoyyBk2Cf50v0ArNO~zybi9zCE3qJVyMWuchwR5MmTwkrnMw8-0pZCcnV9ZV3kaBKWwwbU4oMnliMi18h30U77ZkVrWt16~pfJdQ-~NCkGZUdXfg5BOqKM5wzqo1e-MveFQmj1QBpa-h3xR~3vlZDA__'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/9325/2470/5b5186c2ca4dbde60ee490ed9fb30eb4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CbNYvBlokKUlxe-8RkhiWknwubzJGiQLUBT1Ac~TcaNXPqRX2S~oOWSiYYFN6VzzxIOgtgR3NmSo~1sgMbmhLdMAHKU6EGECk-f0y1iCxENgo5eHIS49OKumdgXB3XF7IRwPZXKxo6SAb4XWMyPpSggPUo8tcIJ0TP1QM20KY8xdiThIhf5Z3p4qHlRBeqRJwxH3mrv~6KVnO0yEWbCRWADgLXrkfUGejV-8aT~X7klOB6f3P4OOih0sJICCTzmWu6nxz0SIgtD-pJvpgDJ~VyO6UdjizIFEUffl185TEHOC-Yhj3DFoJLhYuRee6j9cB-QoiGXK9qwVttx1FrhF9Q__'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/570a/9d6c/38106339fcf6af9f2bf1337b491cbad6?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ad5f9RRieWH4A3GSlOWbYHkSLDmzkGpQwILAIYouxwdjVYTD7iAJ7CjtkpJogk6bn8fC64TAaX3TOZFipoLh9w4bwDWr~ygPEyIcmZZaoQBDfo18IJ4~Eb6eRzzBj0ejLztkPo9cyIh2m2OJGxQ-bnNlZHNc92Hal9H9vcOmb6mQaEDnNS4IjoUtknVLBYXP2BgyeNFnuKV293rPICE3Ml8bZduCCbQY6hT48eTk4j50oR4DZ567ifq2AL8ozy-iRKhFb5qz9WPjcKrfzRcagm7WpGhvWIV~aDC6dSeAdQEk~fAeIFpyMNarsor-Bj1xY48uozGKHPv0KaFNDArjnw__'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/c778/5a00/99f1720a294dcde02403d2e16a1ec34f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B87ZBOhkluh1hBxPBd3iCy4Iy7vduDcCZ8r7M2R1W1yWzAZm8WgqWP99wVgiRdARdu86SRXGjYh72hzAN7ErY02iN0bj8SoGFDok~-BOSNJo6bVe~7lmeyovVE~zW7LxltiNz0kN9-ZKSyvK~k3DNtS52h9py1TWc9BXnQy6hjwBHnUWJmxX42sBiGkjcdgd17K375LSj8Jv44EuFhXJccgNiIFGxM9NkjyE2VKSdEAo9WfKKpj8SKzY80SpAgS4JvEhes9~ZuOPj4vED8p3NChRGk7nLCj3BnkBiTJet7gBZG0DetHip-1yVyv1MksKbZujyvkMq7jbNGhCjXxMAg__'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/c778/5a00/99f1720a294dcde02403d2e16a1ec34f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B87ZBOhkluh1hBxPBd3iCy4Iy7vduDcCZ8r7M2R1W1yWzAZm8WgqWP99wVgiRdARdu86SRXGjYh72hzAN7ErY02iN0bj8SoGFDok~-BOSNJo6bVe~7lmeyovVE~zW7LxltiNz0kN9-ZKSyvK~k3DNtS52h9py1TWc9BXnQy6hjwBHnUWJmxX42sBiGkjcdgd17K375LSj8Jv44EuFhXJccgNiIFGxM9NkjyE2VKSdEAo9WfKKpj8SKzY80SpAgS4JvEhes9~ZuOPj4vED8p3NChRGk7nLCj3BnkBiTJet7gBZG0DetHip-1yVyv1MksKbZujyvkMq7jbNGhCjXxMAg__'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/c778/5a00/99f1720a294dcde02403d2e16a1ec34f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B87ZBOhkluh1hBxPBd3iCy4Iy7vduDcCZ8r7M2R1W1yWzAZm8WgqWP99wVgiRdARdu86SRXGjYh72hzAN7ErY02iN0bj8SoGFDok~-BOSNJo6bVe~7lmeyovVE~zW7LxltiNz0kN9-ZKSyvK~k3DNtS52h9py1TWc9BXnQy6hjwBHnUWJmxX42sBiGkjcdgd17K375LSj8Jv44EuFhXJccgNiIFGxM9NkjyE2VKSdEAo9WfKKpj8SKzY80SpAgS4JvEhes9~ZuOPj4vED8p3NChRGk7nLCj3BnkBiTJet7gBZG0DetHip-1yVyv1MksKbZujyvkMq7jbNGhCjXxMAg__'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/c778/5a00/99f1720a294dcde02403d2e16a1ec34f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B87ZBOhkluh1hBxPBd3iCy4Iy7vduDcCZ8r7M2R1W1yWzAZm8WgqWP99wVgiRdARdu86SRXGjYh72hzAN7ErY02iN0bj8SoGFDok~-BOSNJo6bVe~7lmeyovVE~zW7LxltiNz0kN9-ZKSyvK~k3DNtS52h9py1TWc9BXnQy6hjwBHnUWJmxX42sBiGkjcdgd17K375LSj8Jv44EuFhXJccgNiIFGxM9NkjyE2VKSdEAo9WfKKpj8SKzY80SpAgS4JvEhes9~ZuOPj4vED8p3NChRGk7nLCj3BnkBiTJet7gBZG0DetHip-1yVyv1MksKbZujyvkMq7jbNGhCjXxMAg__'
    }
]