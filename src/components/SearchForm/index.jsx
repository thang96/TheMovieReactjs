import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const SearchForm = ({ setSearchFromValue }) => {
  const [searchParam] = useSearchParams();
  const mediaType = searchParam.get("mediaType");
  const { control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });

  const fromValues = watch();
  useEffect(() => {
    setSearchFromValue(fromValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(fromValues)]);
  return (
    <div className="rounded-lg border-3 border-gray-300 p-4 shadow-md">
      <form className="space-y-4">
        <FormField
          name={"mediaType"}
          label={"Media Type"}
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name={"genres"}
          label={"Genres"}
          control={control}
          Component={GenresInput}
        />
        <FormField
          name={"rating"}
          label={"Rating"}
          control={control}
          Component={RatingInput}
        />
      </form>
    </div>
  );
};
SearchForm.propTypes = {
  setSearchFromValue: PropTypes.func,
};
export default SearchForm;
