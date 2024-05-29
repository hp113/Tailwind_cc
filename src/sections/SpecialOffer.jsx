import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Buttons from "../components/Buttons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="" width={773} height={680}
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Special</span> 
          <span className="text-coral-red"> Offers</span> 
        </h2>
        <p className="mt-4 lg:max-w-lg into-text">
          Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Repudiandae, minima 
           commodi dignissimos facere consequuntur 
           explicabo rem officiis, doloremque expedita 
           atque aut deleniti iusto, maiores  
           repudiandae enim dolores suscipit eligendi.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Buttons label="Shop Now" 
          iconURL={arrowRight}/>
          <Buttons label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer