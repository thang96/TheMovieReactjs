import PropTypes from "prop-types";

const PaginateIndicator = (props) => {
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {props.movie.map((movie) => (
          <li
            key={movie.id}
            className={`h-1.5 w-6 cursor-pointer ${
              movie.id === props?.activetMovieId ? "bg-white" : "bg-slate-600"
            }`}
            onClick={() => {
              props.setActivetMovieId(movie.id);
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

// Định nghĩa propTypes đúng
PaginateIndicator.propTypes = {
  activetMovieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setActivetMovieId: PropTypes.func.isRequired, // Hàm để cập nhật movie hiện tại
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID của từng movie
    }),
  ).isRequired,
};

export default PaginateIndicator;
