import { Customization } from "utils/customization.context";

import { Header } from './components/header';

const customization: Customization = {
  name: "customization1",
  components: {
    header: Header,
  },
  haveBlock: true,
};

export default customization;
