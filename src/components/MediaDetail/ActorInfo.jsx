const ActorInfo = ({ actor }) => {
  console.log(actor);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-300 bg-black/80 text-white shadow-sm">
      <img
        src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/fkIWDrXGH4x8mWEX2eK1kUL8u2n.jpg"
        alt=""
      />
      <div className="p-3">
        <p className="font-bold">{actor?.name}</p>
        <p>{actor?.character}</p>
        <p>{actor?.order}</p>
      </div>
    </div>
  );
};

export default ActorInfo;
