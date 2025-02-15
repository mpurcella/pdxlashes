import WomanWebp from '../assets/images/webp/woman.webp';
import WomanJpeg from '../assets/images/jpeg/woman.jpeg';

const Hero = () => {
    return (
        <>
            <div className="h-[calc(100vh-4.75rem)]">
                <picture>
                    <source srcSet={WomanWebp} type="image/webp" />
                    <source srcSet={WomanJpeg} type="image/jpeg" />
                    <img
                        src={WomanJpeg}
                        alt=""
                        className="h-full w-full object-cover opacity-15"
                    />
                </picture>
            </div>
            <div className="absolute top-[32%] left-0 px-28 md:top-[20%] md:px-52 lg:top-[15%]">
                <h1 className="font-montserrat lg:text-140 md:text-100 text-60 flex flex-col font-black text-white uppercase">
                    <span>PDX</span>
                    <span className="-mt-12 md:-mt-20 lg:-mt-28">Lashes</span>
                </h1>
            </div>
        </>
    );
};

export default Hero;
