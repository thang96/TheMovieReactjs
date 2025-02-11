import ImageComponent from "@components/ImageComponent";
import { currencyFormatter } from "@libs/utils";
import PropTypes from "prop-types";

const MovieInforMation = ({ mediaInfo = {} }) => {
  return (
    <div className="">
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Originnal Name</p>
        <p>{mediaInfo?.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Originnal Country</p>
        {(mediaInfo?.origin_country || []).map((country) => {
          return (
            <ImageComponent
              key={country}
              src={
                country &&
                `https://flagcdn.com/48x36/${country.toLowerCase()}.png`
              }
              width={48}
              height={36}
            />
          );
        })}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{mediaInfo?.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(mediaInfo?.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(mediaInfo?.revenue)}</p>
      </div>
    </div>
  );
};
MovieInforMation.propTypes = {
  mediaInfo: PropTypes.object,
};
export default MovieInforMation;
