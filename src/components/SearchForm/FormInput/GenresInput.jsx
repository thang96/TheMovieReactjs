import useFetch from "@hooks/useFetch";
import { useWatch } from "react-hook-form";
import PropTypes from "prop-types";
import { useEffect } from "react";

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });

  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType },
  );

  useEffect(() => {
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaType]);

  const renderGenres = () => {
    return (data.genres || []).map((genre) => {
      return (
        <p
          key={genre.id}
          className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(genre.id)) {
              newValue = newValue.filter((g) => g !== genre.id);
            } else {
              newValue = [...newValue, genre.id];
            }
            onChange(newValue);
          }}
        >
          {genre.name}
        </p>
      );
    });
  };

  GenresInput.propTypes = {
    control: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.array,
  };

  return <div className="flex flex-wrap gap-1">{data && renderGenres()}</div>;
};

export default GenresInput;
