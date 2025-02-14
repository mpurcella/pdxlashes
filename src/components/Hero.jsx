import WomanWebp from '../assets/images/webp/woman.webp';
import WomanJpeg from '../assets/images/jpeg/woman.jpeg';

const Hero = () => {
    return (
        <section className="relative bg-white">
            <div className="h-[calc(100vh-4.75rem)]">
                <picture>
                    <source srcSet={WomanWebp} type="image/webp" />
                    <source srcSet={WomanJpeg} type="image/jpeg" />
                    <img
                        src={WomanJpeg}
                        alt=""
                        className="h-full w-full object-cover opacity-50"
                    />
                </picture>
            </div>
            <div className="absolute top-[10%] left-0 px-28 py-52 md:px-52">
                <h1 className="font-montserrat lg:text-140 md:text-100 text-60 flex flex-col font-black uppercase">
                    <span>PDX</span>
                    <span className="-mt-12 md:-mt-20 lg:-mt-28">Lashes</span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
