import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonimonial({ ImgSrc, ImgAlt, Feedback, UserName, UserTitle }) {
  return (
    <>
      <section
        id="testimonial-card"
        className="flex flex-wrap items-center justify-center gap-[clamp(40px,1vw,80px)]"
      >
        <div className="avatar max-w-41 max-h-41 rounded-full">
          <img
            src={ImgSrc}
            alt={ImgAlt}
            className="w-full h-full bg-size-[center,cover]"
          />
        </div>
        <div className="feedback font-family text-(--black) max-w-[clamp(300px,70vw,800px)] max-md:max-w-full max-md:text-center">
          <span className="inline-flex flex-nowrap gap-1.25 text-[clamp(16px,1vw,19px)] text-[#FCAD38]">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <h4 className="font-bold text-[clamp(18px,2vw,24px)] leading-[142%] tracking-[-0.02em] mt-[clamp(20px,2vw,37px)] mb-[clamp(0px,2vw,25px)]">
            {Feedback}
          </h4>
          <p className="inline-flex gap-5 capitalize text-[clamp(14px,1vw,17px)] text-[rgba(22,28,45,0.7)] leading-[171%]">
            <span className="font-bold">{UserName}</span>
            <span className="font-normal">{UserTitle}</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Testimonimonial;
