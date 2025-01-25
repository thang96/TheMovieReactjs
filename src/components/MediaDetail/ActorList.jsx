import ActorInfo from "./ActorInfo";

const ActorList = ({ actors }) => {
  const renderActors = () => {
    return actors.map((actor) => {
      return <ActorInfo key={actor?.cast_id} actor={actor} />;
    });
  };

  return (
    <div className="">
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {renderActors()}
      </div>
    </div>
  );
};

export default ActorList;
