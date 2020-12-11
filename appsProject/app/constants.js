const constants = {
  API_URL: 'https://api.yelp.com/v3/businesses',
  IMAGES_BASE_URL: 'https://www.dietdoctor.com/',
  GENERAL_ERROR_MESSAGE: 'Something went wrong',
  INTRO_SLIDERS: [
    {
      key: 'one',
      title: 'About me!',
      text: 'Description.\nSay something cool',
      image: require('../app/assets/images/search.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'About this app',
      text: 'Other cool stuff',
      image: require('../app/assets/images/search.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../app/assets/images/rocket-guy.png'),
      backgroundColor: '#22bcb5',
    },
  ],
  MENU_ACTIONS: [
    {
      text: 'Business Search',
      icon: require('../app/assets/images/search.png'),
      name: 'bt_search',
      position: 1,
    },
    {
      text: 'Notes',
      icon: require('../app/assets/images/notes.png'),
      name: 'bt_language',
      position: 2,
    },
  ],
};

export default constants;
