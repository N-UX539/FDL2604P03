import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function Service({ href, bgColor, ImgSrc, ImgAlt, title, description }) {
  return (
    <>
      <a
        id="service-card"
        href={href}
        className={`service-card inline-flex flex-col items-center justify-center font-family ${bgColor} text-(--white) text-center w-87.5 max-md:w-[calc(50%-24px)] min-w-77.5 h-[clamp(400px,34vw,485px)] rounded-[10px] px-[clamp(17px,3vw,27px)] pt-[clamp(0px,3vw,60px)] pb-[clamp(0px,3vw,38px)]`}
      >
        <div className="card-image w-full flex justify-center items-center mb-10.25">
          <img
            src={ImgSrc}
            alt={ImgAlt}
            loading="lazy"
            className="max-w-full h-auto"
          />
        </div>
        <div className="card-info">
          <h3 className="capitalize font-bold text-[clamp(18px,2vw,24px)] leading-[142%] tracking-[-0.02em]">
            {title}
          </h3>
          <p className="font-normal text-[clamp(14px,1.25vw,16px)] leading-[171%] tracking-[-0.01em] text-[rgba(255,255,255,0.65)] mt-3.75">
            {description}
          </p>
          <Button className="inline-flex p-0 text-[clamp(13px,1.25vw,15px)] gap-6.75 bg-transparent rounded-none mt-[clamp(20px,2vw,43px)]">
            Learn More
            <FontAwesomeIcon icon={faArrowRight} className="text-base" />
          </Button>
        </div>
      </a>
    </>
  );
}

export default Service;
