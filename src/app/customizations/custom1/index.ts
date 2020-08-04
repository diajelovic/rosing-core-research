import { Customization } from "utils/customization.context";

import { Header } from "./components/header";
import { Image } from "./components/image";

import imageUrl from "./green.jpg";

const customization: Customization = {
  name: "customization1",
  components: {
    header: Header,
    image: Image,
  },
  imageUrl,
  haveBlock: true,
};

export default customization;
