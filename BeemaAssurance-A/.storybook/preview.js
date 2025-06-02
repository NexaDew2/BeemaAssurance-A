<<<<<<< HEAD
import '../src/index.css'
=======
import '../src/index.css'; 
>>>>>>> 8a2b8829467f80228337cb97c375bc69e037dd28
/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;