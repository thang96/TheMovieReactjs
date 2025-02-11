import ImageComponent from "@components/ImageComponent";
import PropTypes from "prop-types";

const TVShowInformation = ({ tvInfo = {} }) => {
  const renderNetworks = () => {
    return (tvInfo.networks || []).map((network) => {
      return (
        <img
          className="invert"
          key={network.id}
          src={`https://media.themoviedb.org/t/p/h30/${network.logo_path}`}
          alt=""
        />
      );
    });
  };

  const renderOriginCountrys = () => {
    return (tvInfo?.origin_country || []).map((country) => {
      return (
        <ImageComponent
          key={country}
          src={
            country && `https://flagcdn.com/48x36/${country.toLowerCase()}.png`
          }
          width={48}
          height={36}
        />
      );
    });
  };

  return (
    <div className="">
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Originnal Name</p>
        <p>{tvInfo?.original_title || tvInfo?.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Originnal Country</p>
        {renderOriginCountrys()}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo?.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        {renderNetworks()}
      </div>
    </div>
  );
};
TVShowInformation.propTypes = {
  tvInfo: PropTypes.object,
};
export default TVShowInformation;
