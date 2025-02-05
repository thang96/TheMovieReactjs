import { currencyFormatter } from "@libs/utils";

const MovieInforMation = ({ mediaInfo = {} }) => {
  console.log(mediaInfo);

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
            <img
              key={country}
              src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
              alt=""
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

export default MovieInforMation;
