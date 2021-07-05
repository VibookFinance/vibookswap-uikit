import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M15.42 47.18A34.73 34.73 0 0122 29.58a2.15 2.15 0 013.26-.24L32 36.09a2.15 2.15 0 01.29 2.67 21.06 21.06 0 0013.19 31.85 2.15 2.15 0 011.68 2.09v9.56a2.16 2.16 0 01-2.47 2.14 34.75 34.75 0 01-29.27-37.22M54.64 70.61a21 21 0 0016-16A2.15 2.15 0 0172.71 53h9.56a2.16 2.16 0 012.14 2.48 34.76 34.76 0 01-29 29A2.15 2.15 0 0153 82.27v-9.56a2.15 2.15 0 011.64-2.1zM72.71 47.17a2.13 2.13 0 01-2.09-1.68 21 21 0 00-31.86-13.2 2.15 2.15 0 01-2.67-.29l-6.75-6.76a2.15 2.15 0 01.24-3.24 34.76 34.76 0 0154.83 22.69 2.16 2.16 0 01-2.14 2.48z" />
      <path d="M37 54.77a5.56 5.56 0 001.19 1.6 15.58 15.58 0 0023.11-4.62 15.75 15.75 0 001.94-6.22A5.64 5.64 0 0063 43.3a1.74 1.74 0 00-.67-.88l.21-1.37a.57.57 0 00-.48-.65h-.4a.57.57 0 00-.65.48l-.21 1.39a1.89 1.89 0 00-.94.69v.06l-.06.11c-.06.14-.11.29-.16.43s-.11.26-.16.38-.09.2-.13.29v.07l-.09.18c-.07.15-.14.3-.22.45s-.09.16-.13.25l-.22.4-.15.26-.23.37-.17.25c-.08.13-.16.25-.25.37l-.11.15-.2.28-.15.19-.15.18-.18.23-.23.26-.12.12-.18.21-.22.22c-.06.06-.11.12-.17.17l-.28.27-.3.27-.22.19-.27.23-.27.22-.13.09-.15.11a3.55 3.55 0 01-.31.23l-.26.18-.33.22-.13.08-.14.09-.34.2-.23.13c-.15.08-.3.17-.46.24l-.16.08-.29.13a2.75 2.75 0 01-.3.14l-.34.15-.3.11c-.1.05-.21.08-.31.12h-.08l-.22.08-.31.1h-.13l-.22.07-.35.1h-.22l-.77.17-.77.13H47l-.65.07H43.7l-.7.24a5.58 5.58 0 01-.59-.09 25.91 25.91 0 00-4.09-.51 4 4 0 00-.64.07 1.7 1.7 0 00-.51.19 1.59 1.59 0 00-.24.2l-.08.13a.88.88 0 00-.05.15 2.17 2.17 0 00.2 1.35z" />
    </Svg>
  );
};

export default Icon;