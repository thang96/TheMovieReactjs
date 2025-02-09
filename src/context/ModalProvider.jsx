import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  return useContext(ModalContext);
};
const ModalProvider = ({ children }) => {
  const [isShowing, setisShowing] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowing]);

  return (
    <ModalContext.Provider value={{ setisShowing, setContent }}>
      {children}
      {isShowing && (
        <div className="fixed inset-0">
          <div
            onClick={() => {
              setisShowing(false);
            }}
            className="absolute inset-0 flex items-center justify-center bg-slate-600/50"
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element,
};

export default ModalProvider;
