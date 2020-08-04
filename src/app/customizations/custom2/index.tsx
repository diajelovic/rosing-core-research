import * as React from 'react';
import { Customization } from "utils/customization.context";

import { Header } from './components/header';

const customization: Customization = {
  name: "customization2",
  components: {
    header: Header,
    footer: () => <div>fc - footer2</div>
  },
  haveBlock: true,
};

export default customization;
